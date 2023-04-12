/** https://pl.wikipedia.org/w/index.php?title=Specjalna:Zaloguj&returnto=Wikipedia%3AStrona+główna */

import { test } from '../utils/fixtures'

test.afterEach(async ({page})=>{
  await page.close();
});

test("Login to Wiki", async ({ page, login }) => {
  // const browser = await chromium.launch({channel: "chrome"});
  // const context = await browser.newContext();
  // const page = await context.newPage();
  // await page.goto("https://pl.wikipedia.org/w/index.php?title=Specjalna:Zaloguj&returnto=Wikipedia%3AStrona+główna");
  await page.goto("https://pl.wikipedia.org/wiki/Wikipedia:Strona_główna");
  // await login.login();
  await page.waitForTimeout(10000);
});