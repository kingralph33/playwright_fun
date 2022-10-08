import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/Homepage';

test.describe('verify homepage links work', () => {
	test.beforeEach(async ({ page }, testInfo) => {
		console.log(`Running ${testInfo.title}`);
		await page.goto('/');
	});

	test('KingRalph.dev loads', async ({ page }) => {
		await expect(page).toHaveURL('https://kingralph.dev/');
	});

	test('KingRalph.dev is the site title', async ({ page }) => {
		await expect(page).toHaveTitle('KingRalph.dev');
	});

	test('verify social-icons are visible and clickable', async ({ page }) => {
		const homePage = new HomePage(page);
		await expect(homePage.twitter).toBeVisible();
	});

	test('social icons are visible', async ({ page }) => {
		const homePage = new HomePage(page);
		const socialIcons = [
			homePage.twitter,
			homePage.linkedin,
			homePage.github,
			homePage.email,
			homePage.profileImage,
		];
		for (const icon of socialIcons) {
			await expect(icon).toBeVisible();
		}
	});
});
