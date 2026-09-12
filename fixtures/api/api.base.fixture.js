import { test as base, request as playwrightRequest } from '@playwright/test';
import { config } from '../../config/api.config.cjs';
import { ApiClient } from './api.client.js';

export const test = base.extend({
  apiClient: [
    async ({ }, use) => {
      const requestContext = await playwrightRequest.newContext({
        baseURL: config.baseURL,
        extraHTTPHeaders: process.env.API_TOKEN
          ? {
            Authorization: `Bearer ${process.env.API_TOKEN}`,
          }
          : {},
      });

      const client = new ApiClient(requestContext, config.baseURL);
      await use(client);
      await requestContext.dispose();
    },
    { scope: 'worker' },
  ],
});
