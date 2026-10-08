import { test, expect } from '@playwright/test';

test('opens EPAM Client Work from the Services menu', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  const cookieBanner = page.getByRole('region', { name: 'Cookie banner' });
  const acceptAll = cookieBanner.getByRole('button', { name: 'Accept All' });
  if (await acceptAll.isVisible()) {
    await acceptAll.click();
  }

  await page.locator('.hamburger-menu-ui').click();
  await page.getByRole('button', { name: 'Services' }).click();
  await page.getByRole('link', { name: 'Client Work', exact: true }).click();

  await expect(page).toHaveURL('https://www.epam.com/services/client-work');
  await expect(page.getByRole('heading', { name: 'Client Work', exact: true })).toBeVisible();
});
