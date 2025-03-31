const expect = require('chai').expect;
const allureReporter = require('@wdio/allure-reporter').default;

const webview = {
	action: require('../../../src/android/pages/webview/action.js'),
	assert: require('../../../src/android/pages/webview/assert.js')
};

describe('TS-002 | WebView', function () {

	it('TC-001 | Acessar tela do WebView', async function () {
		allureReporter.addTag('Sanity Test');
		allureReporter.addSeverity('normal');

		const { pageTitle, iconText } = await webview.action.accessWebviewPage();

		expect(pageTitle).to.equal(webview.assert.attribute.pageTitle, pageTitle);
		expect(iconText).to.equal(webview.assert.attribute.iconText, iconText);
	});

	it('TC-002 | Realizar uma busca válida', async function () {
		allureReporter.addTag('Functional Test');
		allureReporter.addSeverity('normal');

		await webview.action.accessWebviewPage();
		const result = await webview.action.useWebview(webview.assert.attribute.searchTerm);

		expect(result).to.be.true;
	});

	it('TC-003 | Limpar busca', async function () {
		allureReporter.addTag('Functional Test');
		allureReporter.addSeverity('minor');

		await webview.action.accessWebviewPage();
		await webview.action.useWebview(webview.assert.attribute.searchTerm);
		await webview.action.clearSearch();
	});

	it('TC-004 | Cancelar busca e retornar ao WebView inicial', async function () {
		allureReporter.addTag('Functional Test');
		allureReporter.addSeverity('normal');

		await webview.action.accessWebviewPage();
		await webview.action.useWebview(webview.assert.attribute.searchTerm);

		const { pageTitle, iconText } = await webview.action.cancelSearch();

		expect(pageTitle).to.equal(webview.assert.attribute.pageTitle, pageTitle);
		expect(iconText).to.equal(webview.assert.attribute.iconText, iconText);
	});
});
