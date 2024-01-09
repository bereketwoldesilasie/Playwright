import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/i');
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByLabel('5 / 8').getByRole('link').click();
});