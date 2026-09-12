import { expect } from '@playwright/test';
import { test } from '../../fixtures/ui/ui.base.fixture.js';

test('login page smoke test', async ({ loginPage, page }) => {
  await loginPage.gotoLoginPage('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
