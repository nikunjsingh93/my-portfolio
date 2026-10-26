import { defineConfig, devices } from '@playwright/test';

const baseURL = process.env.PORTFOLIO_TEST_URL || 'http://127.0.0.1:4173/';

export default defineConfig({
  testDir: './tests', fullyParallel: true, retries: process.env.CI ? 1 : 0,
  use: { baseURL, browserName: 'chromium', channel: process.env.CI ? undefined : 'msedge', trace: 'retain-on-failure' },
  webServer: { command: 'npm run preview -- --port 4173 --strictPort', url: baseURL, reuseExistingServer: !process.env.CI },
  projects: [
    { name: 'desktop', use: { viewport: { width: 1440, height: 1000 } } },
    { name: 'mobile', use: { ...devices['iPhone 13'], defaultBrowserType: 'chromium' } },
    { name: 'reduced-motion', use: { viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce' } },
  ],
});
