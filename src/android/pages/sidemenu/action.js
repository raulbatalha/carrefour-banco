const selector = {
	mainMenu: require('../main-page/selector.js'),
	sideMenu: require('./selector.js'),
	webview: require('./selector.js'),
};

const TIMEOUT = 30000;

module.exports = {
	accessSideMenuPage: async function () {
		await selector.mainMenu.pageWebview.waitForExist({ timeout: TIMEOUT });
		await selector.mainMenu.pageWebview.touchAction('tap');
	},

	checkContentSideMenu: async function () {
		const {
			sideMenuDocs,
			contentDescription,
			backToMain,
			sideMenuApi,
			sideMenuBlog,
			sideMenuContribute,
			sideMenuComunity,
			sideMenuSponsor,
			sideMenuV9,
			sideMenuLanguage,
			sideMenuLanguageDescription,
		} = selector.sideMenu;

		const menuItems = [
			sideMenuDocs,
			sideMenuApi,
			sideMenuBlog,
			sideMenuContribute,
			sideMenuComunity,
			sideMenuSponsor,
			sideMenuV9,
			sideMenuLanguage
		];

		for (const item of menuItems) {
			await item.waitForExist({ timeout: TIMEOUT });
			await sideMenuApi.touchAction('tap');
			await contentDescription.waitForExist({ timeout: TIMEOUT });

			if (backToMain && await backToMain.isDisplayed()) {
				await sideMenuDocs.touchAction('tap');
				await backToMain.waitForExist({ timeout: TIMEOUT });
			}
		}

		await sideMenuLanguageDescription.mustBeVisible();

		const pageTitle = await selector.webview.pageTitle.getText();
		const toogleButtonText = await selector.webview.toogleButtonText.getText();

		return { pageTitle, toogleButtonText };
	},

	exitSideMenu: async function () {
		await selector.sideMenu.exitButton.waitForExist({ timeout: TIMEOUT });
		await selector.sideMenu.exitButton.touchAction('tap');
	}
};
