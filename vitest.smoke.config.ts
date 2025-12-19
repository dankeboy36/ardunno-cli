import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['tests/smoke/**/*.smoke-test.ts'],
    setupFiles: ['tests/smoke/setup.ts'],
    hookTimeout: 5 * 60 * 1_000,
    testTimeout: 10 * 60 * 1_000,
  },
})
