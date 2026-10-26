import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('complete reading path, responsive assets and accessible content', async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('./');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.getByRole('article')).toHaveCount(4);
  for (const article of await page.getByRole('article').all()) {
    await article.scrollIntoViewIfNeeded();
    await expect(article.locator('img')).toHaveJSProperty('complete', true);
    expect(await article.locator('img').evaluate((image: HTMLImageElement) => image.naturalWidth)).toBeGreaterThan(0);
    await expect(article.getByText('Challenge', { exact: true })).toBeVisible();
  }
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  const accessibility = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
  expect(accessibility.violations.map(v => ({ id: v.id, elements: v.nodes.map(n => ({ target: n.target, issue: n.failureSummary })) }))).toEqual([]);
  if (testInfo.project.name === 'mobile') {
    await page.getByRole('button', { name: 'Menu +' }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'About' }).click();
    await expect(page.getByRole('button', { name: 'Menu +' })).toHaveAttribute('aria-expanded', 'false');
    await expect(page).toHaveURL(/#about$/);
  }
  if (testInfo.project.name === 'reduced-motion') expect(await page.locator('canvas').count()).toBe(0);
  expect(errors).toEqual([]);
});

test('keyboard skip link reaches content', async ({ page }) => {
  await page.goto('./'); await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  await page.keyboard.press('Enter'); await expect(page).toHaveURL(/#main$/);
});
