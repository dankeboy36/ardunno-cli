import * as assert from 'assert';
import { describe } from 'mocha';
import { parseGitHub, parseSemver } from '../cli/generate';

describe('generate', () => {
    describe('parseGitHub', () => {
        it('should parse valid', () => {
            assert.deepEqual(parseGitHub('arduino/arduino-cli'), { owner: 'arduino', repo: 'arduino-cli' });
        });
        it('should parse valid with commit', () => {
            assert.deepEqual(parseGitHub('arduino/arduino-cli#5a4ffe0'), {
                owner: 'arduino',
                repo: 'arduino-cli',
                commit: '5a4ffe0',
            });
        });
        [
            '.owner/repo',
            '_owner/repo',
            'owner/re po',
            'owner/repo#',
            '/owner/repo',
            'owner/repo/',
            'owner/repo#one two',
        ].forEach((src) => it(`should not parse '${src}'`, () => assert.equal(parseGitHub(src), undefined)));
    });
    describe('parseSemver', () => {
        it('should parse valid', () => assert.equal(parseSemver('0.30.0'), '0.30.0'));
        it('should parse valid with rc', () => assert.equal(parseSemver('0.30.0-rc1'), '0.30.0-rc1'));
        it("should parse valid with 'v' prefix", () => assert.equal(parseSemver('v0.29.1'), '0.29.1'));
        it("should parse to GitHub ref when version is not greater than '0.29.0'", () =>
            assert.deepEqual(parseSemver('0.29.0'), {
                owner: 'arduino',
                repo: 'arduino-cli',
                commit: '0.29.0',
            }));
        ['a', '0', '0.30', '0.30.', '0.30.0.'].forEach((src) =>
            it(`should not parse '${src}'`, () => assert.equal(parseSemver(src), undefined))
        );
    });
});
