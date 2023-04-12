/** http://127.0.0.1:5000 */

import { test } from '../utils/fixtures'

test.afterEach(async ({page})=>{
  await page.close();
});

test("Login to server", async ({ page, server }) => {
  await page.goto("http://127.0.0.1:5000");
  await server.login();
  await page.waitForTimeout(10000);
});