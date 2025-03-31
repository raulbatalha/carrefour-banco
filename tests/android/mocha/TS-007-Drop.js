const expect = require('chai').expect;
const allureReporter = require('@wdio/allure-reporter').default;

const dragdrop = {
	action: require('../../../src/android/pages/dragdrop/action.js'),
	assert: require('../../../src/android/pages/dragdrop/assert.js')
};

describe('TS-007 | Drag and Drop', function() {

	it('TC-001 | Acessar tela de Drag & Drop', async function() {
		allureReporter.addTag('Sanity Test');
		allureReporter.addSeverity('normal');

		await dragdrop.action.accessDragDropPage();
		const screenVisible = await dragdrop.action.isScreenVisible();

		expect(screenVisible).to.be.true;
	});

	it('TC-002 | Drag L2 to L1', async function() {
		allureReporter.addTag('Functional Test');
		allureReporter.addSeverity('normal');

		await dragdrop.action.accessDragDropPage();
		await dragdrop.action.dragL2ToL1();

		const resultText = await dragdrop.action.getResultMessage();
		expect(resultText).to.equal(dragdrop.assert.attribute.successL2ToL1, resultText);
	});

	it('TC-003 | Drag C3 to C2', async function() {
		allureReporter.addTag('Functional Test');
		allureReporter.addSeverity('normal');

		await dragdrop.action.accessDragDropPage();
		await dragdrop.action.dragC3ToC2();

		const resultText = await dragdrop.action.getResultMessage();
		expect(resultText).to.equal(dragdrop.assert.attribute.successC3ToC2, resultText);
	});
});
