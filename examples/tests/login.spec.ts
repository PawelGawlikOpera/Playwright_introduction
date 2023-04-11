// import { test, expect } from '@playwright/test';
import { test, expect } from '../utils/fixtures'

test("Login test", async ({ page, login }) => {
  // const browser = await chromium.launch({channel: "chrome"});
  // const context = await browser.newContext();
  // const page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com/secure");
  await login.login();
  expect(page.locator("#content h2").isVisible).toBeTruthy();
  await page.waitForTimeout(10000);
});