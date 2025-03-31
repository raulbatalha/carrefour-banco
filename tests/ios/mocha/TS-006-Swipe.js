const expect = require('chai').expect;
const allureReporter = require('@wdio/allure-reporter').default;

const swipe = {
	action: require('../../../src/android/pages/swipe/action.js'),
	assert: require('../../../src/android/pages/swipe/assert.js')
};

describe('TS-010 | Swipe (Carrossel)', function () {

	it('TC-001 | Acessar tela de Swipe', async function () {
		allureReporter.addTag('Sanity Test');
		allureReporter.addSeverity('normal');

		await swipe.action.accessSwipePage();
		const isVisible = await swipe.assert.swipeVisible();
		expect(isVisible).to.be.true;
	});

	it('TC-002 | Swipe para a esquerda no carrossel', async function () {
		allureReporter.addTag('Functional Test');
		allureReporter.addSeverity('normal');

		await swipe.action.accessSwipePage();
		await swipe.action.swipeLeft();

		const text = await swipe.assert.getCarouselText();
		expect(text).to.equal(swipe.assert.attribute.swipeLeftText, text);
	});

	it('TC-003 | Swipe para a direita no carrossel', async function () {
		allureReporter.addTag('Functional Test');
		allureReporter.addSeverity('normal');

		await swipe.action.accessSwipePage();
		await swipe.action.swipeRight();

		const text = await swipe.assert.getCarouselText();
		expect(text).to.equal(swipe.assert.attribute.swipeRightText, text);
	});
});
