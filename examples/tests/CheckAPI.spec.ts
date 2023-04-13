/** https://playwright.dev/ */

import { expect, test } from '@playwright/test';

test.afterEach(async ({ page }) => {
    await page.close();
});

test("Check API", async ({ page }) => {
    await page.goto("https://playwright.dev/");
    await expect.poll(async () => {
        const response = await page.request.get('https://playwright.dev/img/logos/Browsers.png');
        return response.status();
    }, {
        message: 'make sure API eventually succeeds',
        timeout: 10000,
    }).toBe(200);
});