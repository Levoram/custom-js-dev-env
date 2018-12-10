import fs from 'fs';
import {expect} from 'chai';
import jsdom from 'jsdom';

describe('Always passing test',() =>{
  it('should pass',() =>{
    expect(1).to.equal(1);
  });
});

describe('index.html', () => {
  it('should have h1 that says Users Api Example: Fetching data from an api', () => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    const { JSDOM } = jsdom;
    const dom = new JSDOM(index);
    const h1 = dom.window.document.getElementsByTagName("h1")[0];
    expect(h1.innerHTML).to.equal("Users Api Example: Fetching data from an api");
    dom.window.close();
  })
})
