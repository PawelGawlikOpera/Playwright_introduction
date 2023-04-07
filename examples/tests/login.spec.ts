// import { test, expect } from '@playwright/test';
import { test, expect } from '../utils/fixtures'
import { chromium } from '@playwright/test';

test("Login test", async ({ page, login }) => {
  // const browser = await chromium.launch({channel: "chrome"});
  // const context = await browser.newContext();
  // const page = await context.newPage();
  await login.goToLoginPage();
  await login.login();
  expect(page.locator("#hello").isVisible).toBeTruthy();
  await page.waitForTimeout(10000);
});