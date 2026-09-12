import { expect } from '@playwright/test';
import { test } from '../../fixtures/api/api.user.fixture.js';

test('example users list using userService', async ({ userService }) => {
  test.skip(!process.env.API_USERS_PATH, 'Set API_USERS_PATH to enable user listing example');

  const response = await userService.getUsers();

  console.log('Users response status:', response.status());
  expect(response.status()).toBeGreaterThanOrEqual(200);
  expect(response.status()).toBeLessThan(300);
});
