const ts = require('rollup-plugin-ts');
export default {
    input: 'api/index.ts',
    output: [
        {
            format: 'cjs',
            file: 'dist/cjs/index.js',
            sourcemap: true,
        },
        {
            format: 'esm',
            file: 'dist/esm/index.js',
            sourcemap: true,
        },
    ],
    plugins: [ts({ tsconfig: 'tsconfig.json' })],
};
