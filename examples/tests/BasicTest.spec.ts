import { test, expect, chromium } from '@playwright/test';


test("Basic test", async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    await page.close();
    await context.close();
    await browser.close();
});
