/** @type {import('@playwright/test').PlaywrightTestConfig} */
// Load .env if available (optional - requires 'dotenv' in dev deps)
try {
  require('dotenv').config();
} catch (e) {
  // dotenv not installed or .env not present — continue silently
}

const config = {
  testDir: 'tests',
  timeout: 30 * 1000,
  retries: process.env.CI ? 2 : 0,
  reporter: [['list']],
  use: {
    // Default baseURL for request fixture and tests; override via API_BASE_URL env var
    baseURL: process.env.API_BASE_URL || 'http://localhost:3000',
    // Additional useful defaults can be added here
  },
};

module.exports = config;
