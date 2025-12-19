// @ts-check

const path = require('node:path')

const packageJson = require(path.join(__dirname, '..', 'package.json'))
const version =
  packageJson.arduinoCli && typeof packageJson.arduinoCli.version === 'string'
    ? packageJson.arduinoCli.version
    : undefined

if (!version) {
  throw new Error('Missing package.json#arduinoCli.version')
}

console.log(version)
