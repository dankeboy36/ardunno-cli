import execa from 'execa';
import { promises as fs } from 'fs';
import globby from 'globby';
import isValidPath from 'is-valid-path';
import { isAbsolute, join } from 'path';
import { gt, SemVer, valid } from 'semver';
import { dir } from 'tmp-promise';
import rimraf from 'rimraf';

export interface Options {
    readonly src: string;
    readonly out: string;
    readonly force: boolean;
}

export default async function (options: Options): Promise<void> {
    const { src, out, force } = options;
    const [outExists, protos] = await Promise.all([accessibleFolder(out), globProtos(src)]);
    if (!force && outExists) {
        throw new Error(`${out} already exists. Use '--force' to override output.`);
    }
    // If src is an accessible folder use that.
    if (protos) {
        return generate(src, protos, out);
    }
    let semver = parseSemver(src);
    if (typeof semver === 'string') {
        console.warn(
            'Downloading the proto files from the GitHub release is not yet available. Falling back to Git clone. See https://github.com/arduino/arduino-cli/pull/1931.'
        );
        semver = {
            ...arduinoGitHub,
            commit: semver,
        };
    }
    const gh = semver || parseGitHub(src);
    if (gh) {
        const { dispose, checkoutSrc } = await checkout(gh);
        try {
            const clonedProtos = await globProtos(checkoutSrc);
            if (!clonedProtos) {
                throw new Error(`glob failed in ${checkoutSrc}`);
            }
            return generate(checkoutSrc, clonedProtos, out);
        } finally {
            await dispose();
        }
    }
}
interface Plugin {
    readonly name: string;
    readonly options: Record<string, string | string[] | boolean | boolean[]>;
    readonly path: string;
}
function createArgs(plugin: Plugin, src: string, out: string): string[] {
    const { name, options, path } = plugin;
    const opt = Object.entries(options)
        .reduce(
            (acc, [key, value]) => acc.concat((Array.isArray(value) ? value : [value]).map((v) => `${key}=${v}`)),
            [] as string[]
        )
        .join(',');
    return [`--plugin=${path}`, `--proto_path=${src}`, `--${name}_opt=${opt}`, `--${name}_out=${out}`];
}
// eslint-disable-next-line @typescript-eslint/naming-convention
const TsProto: Plugin = {
    name: 'ts_proto',
    path: require.resolve('ts-proto/protoc-gen-ts_proto'),
    options: {
        outputServices: ['nice-grpc', 'generic-definitions'],
        oneof: 'unions',
        useExactTypes: false,
        paths: 'source_relative',
        esModuleInterop: true,
    },
};

async function generate(src: string, protos: string[], out: string): Promise<void> {
    const protoc = require('protoc/protoc');
    const args = [...createArgs(TsProto, src, out), ...protos];
    await execa(protoc, args);
}

async function globProtos(cwd: string): Promise<string[] | undefined> {
    if (!isValidPath(cwd)) {
        return undefined;
    }
    if (!(await accessibleFolder(cwd))) {
        return undefined;
    }
    try {
        return globby('**/*.proto', { cwd });
    } catch (err) {
        console.error('globProtos', err);
        throw err;
    }
}

async function accessibleFolder(maybePath: string): Promise<boolean> {
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

async function checkout(gh: GitHub): Promise<{ checkoutSrc: string; dispose: () => Promise<void> }> {
    const { owner, repo, commit = 'HEAD' } = gh;
    const { path } = await dir({ prefix: repo });
    await execa('git', ['clone', `https://github.com/${owner}/${repo}.git`, path]);
    await execa('git', ['-C', path, 'fetch', '--all', '--tags']);
    await execa('git', ['-C', path, 'checkout', commit]);
    return { checkoutSrc: join(path, 'rpc'), dispose: () => rm(path) };
}

async function rm(path: string): Promise<void> {
    return new Promise<void>((resolve, reject) => rimraf(path, (error) => (error ? reject(error) : resolve())));
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

// Taken from https://github.com/microsoft/TypeScript/issues/32098#issuecomment-1212501932
type RegExpGroups<T extends string[]> =
    | (RegExpMatchArray & { groups?: { [name in T[number]]: string } | { [key: string]: string } })
    | null;
