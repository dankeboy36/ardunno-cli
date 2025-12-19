import { spawn, type ChildProcess } from 'node:child_process'
import fs from 'node:fs/promises'
import os from 'node:os'
import path from 'node:path'

import { ChannelCredentials } from '@grpc/grpc-js'
import { createChannel, createClient } from 'nice-grpc'
import { afterAll, beforeAll, describe, expect, it } from 'vitest'

import {
  ArduinoCoreServiceDefinition,
  type ArduinoCoreServiceClient,
  type Instance,
} from '../../src/api'

type DaemonAddress = {
  hostname: string
  port: number
}

const testTimeoutMs = 10 * 60 * 1000

type SmokeContext = {
  arduinoCliPath: string
}

function tryParseAddress(raw: string): DaemonAddress | undefined {
  let json: Record<string, unknown> | undefined
  try {
    json = JSON.parse(raw)
  } catch {
    return undefined
  }
  if (!json) {
    return undefined
  }
  const hostname = json.IP
  const port = json.Port
  if (typeof hostname === 'string' && typeof port === 'string') {
    const maybePort = Number.parseInt(port, 10)
    if (!Number.isNaN(maybePort)) {
      return { hostname, port: maybePort }
    }
  }
  return undefined
}

async function spawnDaemon(command: string) {
  return new Promise<{ address: DaemonAddress; child: ChildProcess }>(
    (resolve, reject) => {
      let address: DaemonAddress | undefined
      let resolved = false
      const args = ['daemon', '--port', '0', '-v']
      const child = spawn(command, args)

      const onChunk = (data: Buffer) => {
        const chunk = data.toString()
        if (address) {
          return
        }
        const lines = chunk.split('\n')
        for (const line of lines) {
          address = tryParseAddress(line)
          if (address && !resolved) {
            resolved = true
            child.stdout.off('data', onChunk)
            child.stderr.off('data', onChunk)
            resolve({ address, child })
            break
          }
        }
      }

      child.stdout.on('data', onChunk)
      child.stderr.on('data', onChunk)
      child.on('error', (err) => reject(err))
      child.on('exit', (code, signal) => {
        if (resolved) {
          return
        }
        if (signal) {
          reject(new Error(`Exited with signal ${signal}`))
          return
        }
        if (code) {
          reject(new Error(`Exited with code ${code}`))
          return
        }
        if (!address) {
          reject(new Error('Exited before receiving the daemon address.'))
        }
      })
    }
  )
}

function createArduinoClient(address: DaemonAddress) {
  const channel = createChannel(
    `${address.hostname}:${address.port}`,
    ChannelCredentials.createInsecure(),
    {
      'grpc.max_receive_message_length': 1024 * 1024 * 100,
      'grpc.max_send_message_length': 1024 * 1024 * 100,
    }
  )
  const client = createClient(
    ArduinoCoreServiceDefinition,
    channel
  ) as ArduinoCoreServiceClient
  return { client, close: () => channel.close() }
}

async function drain(stream: AsyncIterable<{ message?: { $case: string } }>) {
  for await (const message of stream) {
    if (message?.message?.$case === 'error') {
      throw new Error('Arduino CLI stream error')
    }
  }
}

async function ensureAvrCoreInstalled(
  client: ArduinoCoreServiceClient,
  instance: Instance
) {
  const search = await client.platformSearch({
    instance,
    searchArgs: 'arduino:avr',
    manuallyInstalled: false,
  })
  const summary = search.searchOutput.find(
    (item) => item.metadata?.id === 'arduino:avr'
  )
  if (!summary) {
    throw new Error('arduino:avr platform not found in search results')
  }

  if (summary.installedVersion) {
    return
  }

  const version =
    summary.latestVersion || Object.keys(summary.releases ?? {})[0] || ''
  if (!version) {
    throw new Error('Unable to determine arduino:avr platform version')
  }

  await drain(
    client.platformInstall({
      instance,
      platformPackage: 'arduino',
      architecture: 'avr',
      version,
    })
  )
}

describe('arduino-cli smoke', () => {
  let daemon: ChildProcess | undefined
  let client: ArduinoCoreServiceClient | undefined
  let instance: Instance | undefined
  let closeChannel: (() => void) | undefined

  beforeAll(async () => {
    const smokeContext = (globalThis as { SMOKE_CONTEXT?: SmokeContext })
      .SMOKE_CONTEXT
    if (!smokeContext?.arduinoCliPath) {
      throw new Error('Missing SMOKE_CONTEXT.arduinoCliPath')
    }

    const daemonInfo = await spawnDaemon(smokeContext.arduinoCliPath)
    daemon = daemonInfo.child

    const connection = createArduinoClient(daemonInfo.address)
    client = connection.client
    closeChannel = connection.close

    const createResponse = await client.create({})
    if (!createResponse.instance) {
      throw new Error('Failed to create Arduino Core instance')
    }
    instance = createResponse.instance

    await drain(client.init({ instance }))
    await drain(client.updateIndex({ instance }))
  }, testTimeoutMs)

  afterAll(async () => {
    if (client && instance) {
      await client.destroy({ instance }).catch(() => {})
    }
    closeChannel?.()
    if (daemon && !daemon.killed) {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          daemon?.kill('SIGKILL')
          resolve(undefined)
        }, 10_000)
        daemon?.once('exit', () => {
          clearTimeout(timeout)
          resolve(undefined)
        })
        daemon?.kill('SIGTERM')
      })
    }
  })

  it(
    'installs avr core, finds uno, compiles empty sketch',
    async () => {
      if (!client || !instance) {
        throw new Error('Client not initialized')
      }

      await ensureAvrCoreInstalled(client, instance)

      const search = await client.boardSearch({
        instance,
        searchArgs: 'uno',
        includeHiddenBoards: false,
      })
      const found = search.boards.some(
        (board) => board.fqbn === 'arduino:avr:uno'
      )
      expect(found).toBe(true)

      const sketchDir = await fs.mkdtemp(
        path.join(os.tmpdir(), 'arduino-smoke-')
      )
      const sketchName = path.basename(sketchDir)
      const sketchPath = path.join(sketchDir, `${sketchName}.ino`)
      await fs.writeFile(sketchPath, 'void setup() {}\nvoid loop() {}\n')

      let hasResult = false
      for await (const message of client.compile({
        instance,
        fqbn: 'arduino:avr:uno',
        sketchPath: sketchDir,
      })) {
        if (message?.message?.$case === 'result') {
          hasResult = true
        }
      }
      expect(hasResult).toBe(true)
    },
    testTimeoutMs
  )
})
