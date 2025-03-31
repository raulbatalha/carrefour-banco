const selector = {
	mainMenu: require('../main-page/selector.js'),
	webview: require('./selector.js'),
};

const TIMEOUT = 30000;

module.exports = {
	accessWebviewPage: async function () {
		await selector.mainMenu.pageWebview.waitForExist({ timeout: TIMEOUT });
		await selector.mainMenu.pageWebview.touchAction('tap');

		await selector.webview.loagingSpinner.mustBeVisible();

		const pageTitle = await selector.webview.pageTitle.getText();
		const iconText = await selector.webview.iconText.getText();

		return { pageTitle, iconText };
	},

	useWebview: async function (search) {
		await selector.webview.searchButton.waitForExist({ timeout: TIMEOUT });
		await selector.webview.searchButton.touchAction('tap');

		await selector.webview.searchInputField.waitForExist({ timeout: TIMEOUT });
		await selector.webview.searchInputField.addValue(search);

		const response = await selector.webview.docSearchResult.waitForExist({ timeout: TIMEOUT });

		return response;
	},

	clearSearch: async function () {
		await selector.webview.cleanButton.waitForExist({ timeout: TIMEOUT });
		await selector.webview.cleanButton.touchAction('tap');
	},

	cancelSearch: async function () {
		await selector.webview.cancelButton.waitForExist({ timeout: TIMEOUT });
		await selector.webview.cancelButton.touchAction('tap');

		const pageTitle = await selector.webview.pageTitleText.getText();
		const iconText = await selector.webview.iconText.getText();

		return { pageTitle, iconText };
	}
};
