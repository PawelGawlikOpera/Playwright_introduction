// global-setup.ts
import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const { storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://pl.wikipedia.org/w/index.php?title=Specjalna:Zaloguj&returnto=Wikipedia%3AStrona+główna");
  await page.locator("#wpName1").fill('TestOpera');
  await page.locator("#wpPassword1").fill('Playwright');
  await page.locator('#wpLoginAttempt').click();
  await page.waitForSelector('#main-page-welcome');
  await page.context().storageState({ path: storageState as string });
  await browser.close();
}

export default globalSetup;
