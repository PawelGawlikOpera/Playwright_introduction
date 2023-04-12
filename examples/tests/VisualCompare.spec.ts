/** https://pl.wikipedia.org/wiki/Opera_%28przeglądarka%29#/media/Plik:Opera_2015_icon.svg */

import { expect } from '@playwright/test';
import { test } from '../utils/fixtures'

test.afterEach(async ({page})=>{
    await page.close();
});

test("Visual compare", async ({ page }) => {

    await page.goto("https://pl.wikipedia.org/wiki/Opera_%28przeglądarka%29#/media/Plik:Opera_2015_icon.svg");
    const img = page.locator('div.mw-mmv-image > img');
    await img.screenshot();
    await expect(img).toHaveScreenshot();
});