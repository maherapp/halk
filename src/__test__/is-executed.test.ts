import { fileURLToPath } from 'node:url'

import { isExecuted } from '@/utils/is-executed'

describe('Testing isExecuted utility', () => {
  const originalArgv = process.argv

  beforeEach(() => {
    process.argv = [...originalArgv]
  })

  afterEach(() => {
    process.argv = [...originalArgv]
  })

  it('should return true when argv[1] points to the executing module path', async () => {
    process.argv[1] = fileURLToPath(
      new URL('../utils/is-executed.ts', import.meta.url),
    )
    expect(await isExecuted()).toBe(true)
  })

  it('should return false when argv[1] points to another path', async () => {
    process.argv[1] = fileURLToPath(
      new URL('./is-executed.test.ts', import.meta.url),
    )
    expect(await isExecuted()).toBe(false)
  })

  it('should return false when argv[1] is missing', async () => {
    process.argv = [process.argv[0] ?? 'node']
    expect(await isExecuted()).toBe(false)
  })
})
