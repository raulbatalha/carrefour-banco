const selector = {
	mainMenu: require('../main-page/selector.js'),
	dragDrop: require('./dragdrop.selector.js'),
};

const TIMEOUT = 30000;

module.exports = {
	accessDragDropPage: async function () {
		await selector.mainMenu.pageDrag.waitForExist({ timeout: TIMEOUT });
		await selector.mainMenu.pageDrag.touchAction('tap');
		await selector.dragDrop.screen.waitForDisplayed({ timeout: TIMEOUT });
	},

	dragAndDrop: async function (dragElement, dropTarget) {
		await dragElement.waitForDisplayed({ timeout: TIMEOUT });
		await dropTarget.waitForDisplayed({ timeout: TIMEOUT });

		const start = await dragElement.getLocation();
		const end = await dropTarget.getLocation();

		await driver.touchPerform([
			{ action: 'press', options: { x: start.x + 10, y: start.y + 10 } },
			{ action: 'wait', options: { ms: 300 } },
			{ action: 'moveTo', options: { x: end.x + 10, y: end.y + 10 } },
			{ action: 'release' }
		]);
	},

	dragL2ToL1: async function () {
		await this.dragAndDrop(selector.dragDrop.dragL2, selector.dragDrop.dropL1);
	},

	dragC3ToC2: async function () {
		await this.dragAndDrop(selector.dragDrop.dragC3, selector.dragDrop.dropC2);
	}
};
