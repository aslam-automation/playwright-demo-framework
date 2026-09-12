import { expect } from '@playwright/test';
import { test } from '../../fixtures/api/api.base.fixture.js';

test('example API health check using apiClient', async ({ apiClient }) => {
  const response = await apiClient.get('https://jsonplaceholder.typicode.com/todos/1');

  console.log('API response status:', response.status());
  expect(response.status()).toBeGreaterThanOrEqual(200);
  expect(response.status()).toBeLessThan(300);

  const body = await apiClient.json(response);
  if (body) {
    console.log('API response body:', body);
    expect(body).toHaveProperty('id');
  }
});
