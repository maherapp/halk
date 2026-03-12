import { defineConfig } from 'vitest/config'
import { resolve } from 'node:path'

export default defineConfig({
  test: {
    coverage: { provider: 'v8' },
    projects: [
      {
        resolve: {
          alias: {
            '@': resolve(__dirname, 'src'),
          },
        },
        test: {
          globals: true,
          name: 'unit-test',
          include: ['src/__test__/**/*.{test,spec}.ts'],
          environment: 'node',
        },
      },
    ],
  },
})
