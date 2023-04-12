# Playwright_introduction

## Tests:
### _BasicTest.spec.ts_:
```
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
```
### Basic playwright test

### _LocalServer.spec.ts_:
```
import { test } from '../utils/fixtures'

test.afterEach(async ({page})=>{
  await page.close();
});

test("Login to server", async ({ page, server }) => {
  await page.goto("http://127.0.0.1:5000");
  await server.login();
  await page.waitForTimeout(10000);
});
```

### Tests making local sever

### _MockTest.spec.ts_:
```
import { expect } from '@playwright/test';
import { test } from '../utils/fixtures'

// Define custom BatteryManager interface
interface BatteryManager {
    level: number;
    charging: boolean;
    chargingTime: number;
    dischargingTime: number;
    addEventListener: (type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) => void;
}

test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
        const mockBattery: BatteryManager = {
            level: 0.90,
            charging: true,
            chargingTime: 1800, // seconds
            dischargingTime: 1200,
            addEventListener: () => { }
        };
        // Use type assertion to access 'getBattery' property
        (window.navigator as Navigator & { getBattery: () => Promise<BatteryManager> }).getBattery = async () => mockBattery;
    });
});

test.afterEach(async ({ page }) => {
    await page.close();
});

test("Mock test", async ({ page }) => {
    await page.goto("https://googlechrome.github.io/samples/battery-status/", {waitUntil: 'networkidle'});
    expect(await page.locator('#chargingState').textContent()).toEqual('Charging');
    expect(await page.locator('#chargingTime').textContent()).toEqual('1800 Seconds');
    expect(await page.locator('#dischargeTime').textContent()).toEqual('1200 Seconds');
    expect(await page.locator('#level').textContent()).toEqual('90%');
});
```

### Tests with browser API mock

### _RouteTest.spec.ts_:
```
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
        const newImageBuffer = fs.readFileSync('../testing.png');
        route.fulfill({
            body: newImageBuffer,
            contentType: 'image/png' // Ustawić odpowiedni typ MIME dla nowego obrazka
        });
    });
    await page.goto("https://playwright.dev/");
    await page.locator('img').first().scrollIntoViewIfNeeded();
    await page.waitForTimeout(10000);
});
```
### Tests with route examples.

### _VisualCompare.spec.ts_:
```
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
```

### Visual compare tests

### _WikipediaLogin.spec.ts_:
```
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
```

### Log in to wikipedia (tests show how global-setup.ts work)
