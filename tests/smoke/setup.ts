import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { getTool } from 'get-arduino-tools'
import { beforeAll, vi } from 'vitest'

type SmokeContext = {
  arduinoCliPath: string
}

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '../..')

beforeAll(async () => {
  let rawVersion
  try {
    rawVersion = (
      await fs.readFile(path.join(repoRoot, 'arduino-cli.version'), 'utf8')
    ).trim()
  } catch (err) {
    if (err instanceof Error && 'code' in err && err.code === 'ENOENT') {
      throw new Error('Missing arduino-cli.version')
    }
    throw err
  }
  if (!rawVersion) {
    throw new Error('Missing arduino-cli.version content')
  }
  const cliVersion = rawVersion.startsWith('v')
    ? rawVersion.slice(1)
    : rawVersion

  const binDir = path.join(repoRoot, '.bin')
  const { toolPath } = await getTool({
    tool: 'arduino-cli',
    version: cliVersion,
    destinationFolderPath: binDir,
    okIfExists: true,
  })

  const context: SmokeContext = { arduinoCliPath: toolPath }
  vi.stubGlobal('SMOKE_CONTEXT', context)
  process.env.ARDUINO_CLI_PATH = toolPath
})
