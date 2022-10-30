import isValidPath from 'is-valid-path';
import globby from 'globby';
import { isAbsolute, join } from 'path';
import { promises as fs } from 'fs';
import { gt, SemVer, valid } from 'semver';
import { spawn } from 'child_process';

export interface Options {
    readonly src: string;
    readonly out: string;
    readonly force: boolean;
}

export default async function (options: Options): Promise<void> {
    const { src, out, force } = options;
    const [outExists, protos] = await Promise.all([isAccessibleFolder(out), globProtos(src)]);
    if (!force && outExists) {
        throw new Error(`${out} already exists. Use '--force' to override output.`);
    }
    // If src is an accessible folder use that.
    if (protos) {
        return generate(src, protos, out);
    }
}

async function generate(src: string, protos: string[], out: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        const protoc = require('protoc/protoc');
        const plugin = require.resolve('ts-proto/protoc-gen-ts_proto');
        const args = [
            `--plugin=${plugin}`,
            `--proto_path=${src}`,
            '--ts_proto_opt=outputServices=nice-grpc,outputServices=generic-definitions,oneof=unions,useExactTypes=false,paths=source_relative,esModuleInterop=true',
            `--ts_proto_out=${out}`,
            ...protos,
        ];
        const cp = spawn(protoc, args);
        cp.on('error', reject);
        cp.on('exit', (signal, code) => {
            if (signal) {
                reject(`Exited with signal ${signal}`);
            }
            if (code) {
                reject(`Exited with code ${code}`);
            }
            resolve();
        });
        cp.stdout.on('data', (data) => console.log(data.toString()));
        cp.stderr.on('data', (data) => console.error(data.toString()));
    });
}

async function globProtos(cwd: string): Promise<string[] | undefined> {
    if (!isValidPath(cwd)) {
        return undefined;
    }
    try {
        return globby('**/*.proto', { cwd });
    } catch (err) {
        console.error('globProtos', err);
        throw err;
    }
}

async function isAccessibleFolder(maybePath: string): Promise<boolean> {
    if (!isValidPath(maybePath)) {
        return false;
    }
    const path = isAbsolute(maybePath) ? maybePath : join(process.cwd(), maybePath);
    try {
        const stat = await fs.stat(path);
        return stat.isDirectory();
    } catch {
        return false;
    }
}

// Constraint does not match with all GitHub rules, they're only a subset of them
// owner name can contain only hyphens
// repo name can contain dots and underscores
// commit can be a branch, a hash, tag, etc, anything that git can `checkout` TODO: use https://git-scm.com/docs/git-check-ref-format?
const gh = /^(?<owner>([0-9a-zA-Z-]+))\/(?<repo>([0-9a-zA-Z-_\.]+))(#(?<commit>([^\s]+)))?$/;
const arduinoGitHub: GitHub = {
    owner: 'arduino',
    repo: 'arduino-cli',
};

export interface GitHub {
    readonly owner: string;
    readonly repo: string;
    readonly commit?: string | undefined;
}
export function parseGitHub(src: string): GitHub | undefined {
    const match: RegExpGroups<['owner', 'repo', 'commit']> = src.match(gh);
    if (match && match.groups) {
        const {
            groups: { owner, repo, commit },
        } = match;
        return {
            owner,
            repo,
            ...(commit && { commit }),
        };
    }
    return undefined;
}

/**
 * The `.proto` files are not part of the Arduino CLI release until before version 0.29.0+ ([`arduino/arduino-cli#1931`](https://github.com/arduino/arduino-cli/pull/1931)). It provides the GitHub ref instead.
 */
export function parseSemver(src: string): string | GitHub | undefined {
    if (!valid(src)) {
        return undefined;
    }
    const semver = new SemVer(src, true);
    if (gt(semver, new SemVer('0.29.0'))) {
        return semver.version;
    }
    return {
        ...arduinoGitHub,
        commit: semver.version,
    };
}

// async function generateFromFolder(): Promise<string | undefined> {}
// async function generateFromSemver(): Promise<string | undefined> {}
// async function generateFromCommit(): Promise<string | undefined> {}

// async function generate()

// Taken from https://github.com/microsoft/TypeScript/issues/32098#issuecomment-1212501932
type RegExpGroups<T extends string[]> =
    | (RegExpMatchArray & { groups?: { [name in T[number]]: string } | { [key: string]: string } })
    | null;
