// @ts-check

import importPlugin from 'eslint-plugin-import'
import prettierPlugin from 'eslint-plugin-prettier'
import { defineConfig } from 'eslint/config'
import neostandard from 'neostandard'

const baseRules = neostandard({
  semi: false,
  ts: true,
  ignores: [
    'dist',
    '**/dist/**',
    'node_modules',
    'coverage',
    'out',
    '**/out/**',
  ],
})

export default defineConfig([
  ...baseRules,
  {
    files: ['src/api/**/*.ts', 'src/config/**/*.ts'],
    linterOptions: {
      reportUnusedDisableDirectives: 'off',
    },
    rules: {
      camelcase: 'off',
      '@typescript-eslint/naming-convention': 'off',
    },
  },
  {
    plugins: {
      import: importPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      curly: 'warn',
      eqeqeq: 'warn',
      '@stylistic/comma-dangle': 'off',
      '@stylistic/generator-star-spacing': 'off',
      '@stylistic/indent': 'off',
      '@stylistic/no-tabs': 'off',
      '@stylistic/space-before-function-paren': [
        'error',
        { anonymous: 'always', named: 'never', asyncArrow: 'always' },
      ],
      'generator-star-spacing': 'off',
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
      'import/first': 'error',
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
          ],
        },
      ],
      'import/newline-after-import': 'error',
      'prettier/prettier': ['warn', { proseWrap: 'always' }],
    },
  },
])
