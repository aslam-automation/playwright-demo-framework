import { expect } from '@playwright/test';
import { test } from '../../fixtures/api/api.base.fixture.js';
import { config } from '../../config/api.config.cjs';

test('example API health check using apiClient', async ({ apiClient }) => {
  console.log('API Url:', config.todoPath);
  const response = await apiClient.get(config.todoPath);

  console.log('API response status:', response.status());
  expect(response.status()).toBeGreaterThanOrEqual(200);
  expect(response.status()).toBeLessThan(300);

  const body = await apiClient.json(response);
  if (body) {
    console.log('API response body:', body);
    expect(body).toHaveProperty('id');
  }
});
