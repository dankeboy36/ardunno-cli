// @ts-check

const fs = require('node:fs/promises')
const path = require('node:path')
const { spawnSync } = require('node:child_process')

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
  const packageJsonPath = path.join(repoRoot, 'package.json')
  const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf8'))

  const versionFromArgs = process.argv
    .slice(2)
    .find((arg) => !arg.startsWith('-'))
  const version = versionFromArgs ?? packageJson.arduinoCli?.version

  if (!version) {
    throw new Error(
      'Missing Arduino CLI version. Set package.json#arduinoCli.version or pass it as an argument (e.g. `node scripts/generate.js v1.3.1`).'
    )
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
