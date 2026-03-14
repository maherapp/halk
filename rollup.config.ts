import { defineConfig } from 'rollup'
import tsPlugin from '@rollup/plugin-typescript'

export default defineConfig({
  input: 'src/cli.ts',
  output: [
    {
      file: 'dist/cli.cjs',
      format: 'cjs',
    },
    { file: 'dist/cli.js', format: 'esm' },
  ],
  plugins: [
    tsPlugin({
      declaration: false,
      exclude: ['**/*.test.ts', '**/*.spec.ts'],
    }),
  ],
  external: [/^node:/],
})
