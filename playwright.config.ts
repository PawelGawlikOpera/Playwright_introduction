import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: "examples/tests",
  // testMatch: /.*\.(js|ts|mjs)/,
  timeout: 60000,
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter:
    [
      ['html', 'list']
    ],
  outputDir: 'test-results/',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  globalSetup: require.resolve("./global-setup.ts"),
  globalTeardown: require.resolve("./global-teardown.ts"),
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    storageState: 'state.json',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    screenshot: 'on',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use:
      {
        ...devices["Desktop Chrome"],
        actionTimeout: 2000,
        navigationTimeout: 3000,
        screenshot: "only-on-failure",
        colorScheme: "dark",
        channel: "chrome",
        browserName: "chromium",
        ignoreHTTPSErrors: true,
        locale: "en-GB",
      },
    },
  ],
  webServer: {
    command: 'python server.py',
    port: 5000,
    timeout: 120 * 1000,
  }
});
