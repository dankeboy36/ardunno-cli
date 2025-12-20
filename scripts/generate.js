// @ts-check

const fs = require('node:fs/promises')
const path = require('node:path')
const { spawnSync } = require('node:child_process')

const missingVersionFile =
  'Missing Arduino CLI version. Set arduino-cli.version or pass it as an argument (e.g. `node scripts/generate.js v1.3.1`).'

/**
 * @param {string} command
 * @param {string[]} args
 */
function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    ...options,
  })

  if (result.error) throw result.error
  if (typeof result.status === 'number' && result.status !== 0) {
    process.exit(result.status)
  }
}

async function main() {
  const repoRoot = path.resolve(__dirname, '..')
  const versionPath = path.join(repoRoot, 'arduino-cli.version')

  const versionFromArgs = process.argv
    .slice(2)
    .find((arg) => !arg.startsWith('-'))
  let version = versionFromArgs
  if (!version) {
    try {
      version = (await fs.readFile(versionPath, 'utf8')).trim()
    } catch (err) {
      if (err instanceof Error && 'code' in err && err.code === 'ENOENT') {
        throw new Error(missingVersionFile)
      }
      throw err
    }
  }

  if (!version) {
    throw new Error(missingVersionFile)
  }

  run(
    'npx',
    ['--no-install', 'ardunno-cli', 'generate', version, '-o', 'src/api', '-f'],
    { cwd: repoRoot }
  )

  run(
    'npx',
    [
      '--no-install',
      'ctix',
      'single',
      '-p',
      './tsconfig.json',
      '-o',
      './src/api/api.ts',
      '-w',
    ],
    {
      cwd: repoRoot,
    }
  )

  run(
    'npx',
    [
      '--no-install',
      'replace-in-files',
      '--string',
      ' type ',
      '--replacement',
      '',
      './src/api/index.ts',
    ],
    { cwd: repoRoot }
  )

  run('node', ['./scripts/get-schema.js', version], { cwd: repoRoot })

  run(
    'npx',
    [
      '--no-install',
      'json2ts',
      '--input',
      './schemas/arduino-cli-schema.json',
      '--output',
      './src/config/index.ts',
      '--no-additionalProperties',
      '--bannerComment',
      '/* This file was automatically generated. DO NOT MODIFY IT BY HAND. **/',
    ],
    { cwd: repoRoot }
  )

  run('npx', ['--no-install', 'prettier', '--write', '.'], { cwd: repoRoot })
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
