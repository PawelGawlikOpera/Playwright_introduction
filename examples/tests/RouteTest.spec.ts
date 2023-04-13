/** https://playwright.dev/ */

import { test } from '../utils/fixtures'
import * as fs from 'fs';

test.afterEach(async ({ page }) => {
    await page.close();
});

test("Abort img", async ({ page }) => {

    await page.route(/(png|jpeg)$/, route => route.abort());
    await page.goto("https://playwright.dev/");
    await page.waitForTimeout(10000);
});

test("Change img", async ({ page }) => {

    await page.route(/(png|jpeg)$/, (route) =>{
        const newImageBuffer = fs.readFileSync('examples/tests/testing.png');
        route.fulfill({
            body: newImageBuffer,
            contentType: 'image/png' // Ustawić odpowiedni typ MIME dla nowego obrazka
        });
    });
    await page.goto("https://playwright.dev/");
    await page.locator('img').first().scrollIntoViewIfNeeded();
    await page.waitForTimeout(10000);
});