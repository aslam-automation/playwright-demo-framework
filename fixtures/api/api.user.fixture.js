import { test as base } from './api.base.fixture.js';
import { UserApi } from './services/api.user.service.js';

export const test = base.extend({
  userService: [
    async ({ apiClient }, use) => {
      await use(new UserApi(apiClient));
    },
    { scope: 'worker' },
  ],
});
