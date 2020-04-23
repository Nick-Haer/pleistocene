// const puppeteer = require('puppeteer');
// //puppeteer
// describe('Open Page', () => {
//   beforeAll(async () => {
//     const browser = await puppeteer.launch({
//       headless: true,
//       slowMo: 100,
//     });
//     const page = await browser.newPage();
//     await page.goto('localhost:3000');
//     await page.click('.clickButton');
//   });

//   it('should be titled "React Testing"', async () => {
//     // await expect(page.title()).resolves.toMatch('React Testing');
//   });
// });

import sum from '../Sum';

// jest
describe('It should sum the arguments', () => {
  it('adds 2 + 1 equals to 3', () => {
    expect(sum(2, 1)).not.toBeFalsy();
  });
});
