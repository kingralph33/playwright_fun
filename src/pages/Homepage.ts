import { Locator, Page } from '@playwright/test';

export class HomePage {
	readonly page: Page;
	readonly twitter: Locator;
	readonly linkedin: Locator;
	readonly github: Locator;
	readonly email: Locator;
	readonly profileImage: Locator;

	constructor(page: Page) {
		this.page = page;

		this.twitter = page.locator(
			'#__next > div > div > main > section > div.text-center.space-y-4 > div.space-x-4 > a:nth-child(1)'
		);

		this.linkedin = page.locator(
			'#__next > div > div > main > section > div.text-center.space-y-4 > div.space-x-4 > a:nth-child(2)'
		);

		this.github = page.locator(
			'#__next > div > div > main > section > div.text-center.space-y-4 > div.space-x-4 > a:nth-child(3)'
		);

		this.email = page.locator(
			'#__next > div > div > main > section > div.text-center.space-y-4 > div.space-x-4 > a:nth-child(4)'
		);

		this.profileImage = page.locator(
			'//*[@id="__next"]/div/div/main/section/div[1]/img'
		);
	}
}
