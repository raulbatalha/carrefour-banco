const expect = require('chai').expect;
const allureReporter = require('@wdio/allure-reporter').default;

const mainPage = {
	action: require('../../../src/android/pages/main-page/action.js'),
	assert: require('../../../src/android/pages/main-page/assert.js')
};

describe('TS-001 | Tela Principal', function () {

	it('TC-001 | Validar pacote do app', async function () {
		allureReporter.addTag('Sanity Test');
		allureReporter.addSeverity('critical');

		const packageName = await mainPage.action.checkPackage();
		expect(packageName).to.equal(mainPage.assert.attribute.packageName, packageName);
	});

	it('TC-002 | Verificar se todos os elementos principais estão visíveis', async function () {
		allureReporter.addTag('Sanity Test');
		allureReporter.addSeverity('normal');

		const homeText = await mainPage.action.checkAllContent();
		expect(homeText).to.equal(mainPage.assert.attribute.homeText, homeText);
	});
});
