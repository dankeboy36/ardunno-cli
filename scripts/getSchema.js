// @ts-check
/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('node:fs/promises');
const path = require('node:path');
const { valid: isValidSemver } = require('semver');

const configSchemaPath = path.join(
    __filename,
    '../../schemas/arduino-cli-schema.json'
);

async function run(version) {
    try {
        await fs.readFile(configSchemaPath);
    } catch (err) {
        if (isENOENT(err)) {
            return downloadSchema(version);
        }
        throw err;
    }
}

function isENOENT(err) {
    return (
        err !== null &&
        typeof err === 'object' &&
        'code' in err &&
        err.code === 'ENOENT'
    );
}

async function ensureSchemasFolder() {
    const schemasFolderPath = path.dirname(configSchemaPath);
    await fs.mkdir(schemasFolderPath, { recursive: true });
    return schemasFolderPath;
}

async function downloadSchema(version) {
    const directory = await ensureSchemasFolder();
    const url = buildUrl(version);
    console.log('version', version, 'url', url);
    const { downloadFile } = await import('ipull');
    const downloader = await downloadFile({
        url,
        directory,
        cliProgress: true,
        parallelStreams: 1,
    });
    await downloader.download();
    await fs.rename(
        path.join(directory, downloader.fileName),
        configSchemaPath
    );
}

function buildUrl(version) {
    if (!version) {
        version = 'master';
        return `https://raw.githubusercontent.com/arduino/arduino-cli/refs/heads/${version}/internal/cli/configuration/configuration.schema.json`;
    }
    const semver = isValidSemver(version);
    if (semver) {
        return `https://raw.githubusercontent.com/arduino/arduino-cli/refs/tags/${version}/internal/cli/configuration/configuration.schema.json`;
    }
    // The hash can be in both both the short and long format: 81d517b and 81d517b34e7fe5878b10dfb6d2589cc21265d192
    return `https://raw.githubusercontent.com/arduino/arduino-cli/${version}/internal/cli/configuration/configuration.schema.json`;
}

const version = process.argv.slice(2).shift();

run(version);
