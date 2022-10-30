#!/usr/bin/env node

import { Command } from 'commander';
import generate from './generate';

const description = 'Generates TS/JS API for the Arduino CLI';
const program = new Command();
program.name('arduino-cli-ts-gen').description(description);

program
    .command('generate')
    .description(description)
    .argument(
        '<string>',
        "The source to the .proto files to generate from. Can be a path to the folder which contains the proto files. Can be a valid semver. The proto files will be downloaded from the Arduino CLI's GitHub release. Can be a GitHub commit in the following format `(?<owner>)/(?<repo>)(#(?<commit>))?`. The proto files will be cloned and checked out from GitHub."
    )
    .requiredOption('-o, --out <string>', 'Specify an output folder for all emitted files.')
    .option('-f, --force', 'Override previously emitted files in the output location.')
    .action(async (arg, options) => {
        const src = String(arg);
        const force = Boolean(options.force);
        const out = String(options.out);
        await generate({ src, out, force });
    });

program.parse();
