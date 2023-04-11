// global-setup.ts
import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const { baseURL, storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://the-internet.herokuapp.com/login");
  await page.locator("#username").fill('tomsmith');
  await page.locator("#password").fill('SuperSecretPassword!');
  await page.locator('button[class*="radius"]').click();
  await page.context().storageState({ path: storageState as string });
  await browser.close();
}

export default globalSetup;