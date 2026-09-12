import { expect } from '@playwright/test';
import { test } from '../../fixtures/api/api.auth.fixture.js';

test('example login using authService', async ({ authService }) => {
  test.skip(!process.env.API_LOGIN_PATH, 'Set API_LOGIN_PATH to enable login example');

  const response = await authService.login(
    process.env.API_USERNAME || 'demo-user',
    process.env.API_PASSWORD || 'demo-password'
  );

  console.log('Login response status:', response.status());
  expect(response.status()).toBeGreaterThanOrEqual(200);
  expect(response.status()).toBeLessThan(300);
});
