// @ts-check

const fs = require('node:fs/promises')
const path = require('node:path')

const { valid: isValidSemver } = require('semver')

const configSchemaPath = path.join(
  __filename,
  '../../schemas/arduino-cli-schema.json'
)
const schemaVersionPath = path.join(
  path.dirname(configSchemaPath),
  'arduino-cli-schema.version'
)

/** @param {string} version */
async function run(version) {
  const needsDownload = await shouldDownloadSchema(version)
  if (!needsDownload) {
    console.log(`Schema already up to date for ${version}`)
    return
  }

  await downloadSchema(version)
  await fs.writeFile(schemaVersionPath, `${version}\n`)
}

/** @param {unknown} err */
function isENOENT(err) {
  return (
    err !== null &&
    typeof err === 'object' &&
    'code' in err &&
    err.code === 'ENOENT'
  )
}

async function ensureSchemasFolder() {
  const schemasFolderPath = path.dirname(configSchemaPath)
  await fs.mkdir(schemasFolderPath, { recursive: true })
  return schemasFolderPath
}

/** @param {string} version */
async function shouldDownloadSchema(version) {
  try {
    await fs.readFile(configSchemaPath)
  } catch (err) {
    if (isENOENT(err)) {
      return true
    }
    throw err
  }

  try {
    const recordedVersion = await fs.readFile(schemaVersionPath, 'utf8')
    return recordedVersion.trim() !== version
  } catch (err) {
    if (isENOENT(err)) {
      return true
    }
    throw err
  }
}

/** @param {string} version */
async function downloadSchema(version) {
  const directory = await ensureSchemasFolder()
  const url = buildUrl(version)
  console.log('version', version, 'url', url)
  const { downloadFile } = await import('ipull')
  const downloader = await downloadFile({
    url,
    directory,
    cliProgress: true,
    parallelStreams: 1,
  })
  await downloader.download()
  await fs.rename(path.join(directory, downloader.fileName), configSchemaPath)
}

/** @param {string | undefined} version */
function buildUrl(version) {
  if (!version) {
    version = 'master'
    return `https://raw.githubusercontent.com/arduino/arduino-cli/refs/heads/${version}/internal/cli/configuration/configuration.schema.json`
  }
  const semver = isValidSemver(version)
  if (semver) {
    return `https://raw.githubusercontent.com/arduino/arduino-cli/refs/tags/${version}/internal/cli/configuration/configuration.schema.json`
  }
  // The hash can be in both both the short and long format: 81d517b and 81d517b34e7fe5878b10dfb6d2589cc21265d192
  return `https://raw.githubusercontent.com/arduino/arduino-cli/${version}/internal/cli/configuration/configuration.schema.json`
}

const version = process.argv.slice(2).shift()
if (!version) {
  console.error('usage node scripts/get-schema.js v1.4.1')
  process.exit(1)
}
run(version).catch(console.error)
