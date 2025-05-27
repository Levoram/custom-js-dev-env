import fs from 'fs'
import { expect, describe, it } from 'vitest'
import { JSDOM } from 'jsdom'

describe('Always passing test', () => {
  it('should pass', () => {
    expect(1).toBe(1)
  })
})

describe('index.html', () => {
  it('should have h1 that says Users Api Example: Fetching data from an api', () => {
    const index = fs.readFileSync('./src/index.html', 'utf-8')
    const dom = new JSDOM(index)
    const h1 = dom.window.document.getElementsByTagName('h1')[0]
    expect(h1.innerHTML).toBe('Users Api Example: Fetching data from an api')
    dom.window.close()
  })
})
