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
  const pkg = JSON.parse(
    await fs.readFile(path.join(repoRoot, 'package.json'), 'utf8')
  )
  const rawVersion = String(pkg.arduinoCli?.version ?? '')
  if (!rawVersion) {
    throw new Error('Missing package.json#arduinoCli.version')
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
