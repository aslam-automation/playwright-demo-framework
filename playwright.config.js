/** @type {import('@playwright/test').PlaywrightTestConfig} */
// Load .env if available (optional - requires 'dotenv' in dev deps)
try {
  require('dotenv').config();
} catch (e) {
  // dotenv not installed or .env not present — continue silently
}

const { config: apiConfig } = require('./config/api.config.cjs');

const config = {
  testDir: 'tests',
  timeout: 30 * 1000,
  retries: process.env.CI ? 2 : 0,
  reporter: [['list']],
  use: {
    baseURL: apiConfig.baseURL,
    // Additional useful defaults can be added here
  },
};

module.exports = config;
