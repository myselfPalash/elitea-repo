import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'https://www.epam.com',
    viewport: { width: 1036, height: 582 },
    browserName: 'chromium',
  },
});
