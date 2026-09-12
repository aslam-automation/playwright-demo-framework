import { test as base } from './api.base.fixture.js';
import { AuthApi } from './services/api.auth.service.js';

export const test = base.extend({
  authService: [
    async ({ apiClient }, use) => {
      await use(new AuthApi(apiClient));
    },
    { scope: 'worker' },
  ],
});
