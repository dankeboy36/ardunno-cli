// @ts-check

const fs = require('node:fs/promises')
const path = require('node:path')

const semver = require('semver')

const ARDUINO_CLI_REPO = 'arduino/arduino-cli'

/** @param {string} tag */
function toSemver(tag) {
  const coerced = semver.coerce(tag)
  return coerced?.version ?? undefined
}

async function fetchLatestReleaseTag() {
  /** @type {HeadersInit} */
  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'ardunno-cli-bot',
    // https://docs.github.com/en/rest/about-the-rest-api/api-versions?apiVersion=2022-11-28#supported-api-versions
    'X-GitHub-Api-Version': '2022-11-28',
  }

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  }

  const res = await fetch(
    `https://api.github.com/repos/${ARDUINO_CLI_REPO}/releases/latest`,
    {
      headers,
    }
  )

  if (!res.ok) {
    const body = await res.text().catch(() => '')
    throw new Error(`GitHub API request failed (${res.status}): ${body}`)
  }

  /** @type {{ tag_name?: string }} */
  const json = await res.json()
  if (!json.tag_name) {
    throw new Error('GitHub API response did not include tag_name')
  }
  return json.tag_name
}

async function main() {
  const repoRoot = path.resolve(__dirname, '..')
  const packageJsonPath = path.join(repoRoot, 'package.json')

  /** @type {Record<string, any>} */
  const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf8'))
  /** @type {string} */
  const currentTag = packageJson.arduinoCli?.version

  if (!currentTag) {
    throw new Error('Missing package.json#arduinoCli.version')
  }

  const currentSemver = toSemver(currentTag)
  if (!currentSemver) {
    throw new Error(
      `Current Arduino CLI version is not semver-ish: ${currentTag}`
    )
  }

  const latestTag = await fetchLatestReleaseTag()
  const latestSemver = toSemver(latestTag)
  if (!latestSemver) {
    throw new Error(`Latest Arduino CLI tag is not semver-ish: ${latestTag}`)
  }

  const updated = semver.gt(latestSemver, currentSemver)

  if (updated) {
    packageJson.arduinoCli = {
      ...(packageJson.arduinoCli ?? {}),
      version: latestTag,
    }

    await fs.writeFile(
      packageJsonPath,
      `${JSON.stringify(packageJson, null, 2)}\n`
    )
    console.log(`Updated Arduino CLI version: ${currentTag} -> ${latestTag}`)
  } else {
    console.log(`Arduino CLI version is up-to-date: ${currentTag}`)
  }

  return updated
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
