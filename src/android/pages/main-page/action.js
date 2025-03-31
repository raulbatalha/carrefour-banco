const selector = require('./selector.js');
const { driver } = require('@wdio/globals');

const TIMEOUT = 30000;

module.exports = {
	checkPackage: async function () {
		await selector.appLogo.waitForExist({ timeout: TIMEOUT });

		const appPackage = await driver.getCurrentPackage();
		return appPackage;
	},

	checkAllContent: async function () {
		await selector.appLogo.waitForExist({ timeout: TIMEOUT });
		await selector.pageHome.waitForExist({ timeout: TIMEOUT });
		await selector.pageWebview.waitForExist({ timeout: TIMEOUT });
		await selector.pageLogin.waitForExist({ timeout: TIMEOUT });
		await selector.pageForm.waitForExist({ timeout: TIMEOUT });
		await selector.pageSwipe.waitForExist({ timeout: TIMEOUT });
		await selector.pageDrag.waitForExist({ timeout: TIMEOUT });
		await selector.frameLayout.waitForExist({ timeout: TIMEOUT });

		const homeText = await selector.pageHome.getText();
		return homeText;
	}
};
