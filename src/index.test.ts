import { test, describe } from 'node:test'
import assert from 'node:assert'
import { pugg } from './index.js'

describe('pugg function', () => {
  test('should return the expected greeting message', () => {
    const result = pugg()
    assert.strictEqual(result, 'Hello from pugg!')
  })

  test('should return a string', () => {
    const result = pugg()
    assert.strictEqual(typeof result, 'string')
  })

  test('should not return an empty string', () => {
    const result = pugg()
    assert.ok(result.length > 0)
  })

  test('should contain the word "pugg"', () => {
    const result = pugg()
    assert.ok(result.includes('pugg'))
  })
})
