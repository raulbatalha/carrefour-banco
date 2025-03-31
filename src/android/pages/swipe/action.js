const selector = {
	mainMenu: require('../main-page/selector.js'),
	swipePage: require('./selector.js'),
};

const TIMEOUT = 30000;

module.exports = {
	accessSwipePage: async function () {
		await selector.mainMenu.pageSwipe.waitForExist({ timeout: TIMEOUT });
		await selector.mainMenu.pageSwipe.touchAction('tap');
	},

	swipeLeft: async function () {
		const carousel = selector.swipePage.carousel;
		await carousel.waitForDisplayed({ timeout: TIMEOUT });

		const { x, y } = await carousel.getLocation();
		const { width, height } = await carousel.getSize();

		const startX = x + width * 0.9;
		const endX = x + width * 0.1;
		const centerY = y + height / 2;

		await driver.touchPerform([
			{ action: 'press', options: { x: startX, y: centerY } },
			{ action: 'wait', options: { ms: 200 } },
			{ action: 'moveTo', options: { x: endX, y: centerY } },
			{ action: 'release' }
		]);
	},

	swipeRight: async function () {
		const carousel = selector.swipePage.carousel;
		await carousel.waitForDisplayed({ timeout: TIMEOUT });

		const { x, y } = await carousel.getLocation();
		const { width, height } = await carousel.getSize();

		const startX = x + width * 0.1;
		const endX = x + width * 0.9;
		const centerY = y + height / 2;

		await driver.touchPerform([
			{ action: 'press', options: { x: startX, y: centerY } },
			{ action: 'wait', options: { ms: 200 } },
			{ action: 'moveTo', options: { x: endX, y: centerY } },
			{ action: 'release' }
		]);
	}
};