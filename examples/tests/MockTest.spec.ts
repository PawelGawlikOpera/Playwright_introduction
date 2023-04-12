/** https://googlechrome.github.io/samples/battery-status/ */

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