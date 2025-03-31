const expect = require('chai').expect;
const allureReporter = require('@wdio/allure-reporter').default;

const form = {
	action: require('../../../src/android/pages/forms/action.js'),
	assert: require('../../../src/android/pages/forms/assert.js')
};

describe('TS-005 | Formulário', function() {

	it('TC-001 | Acessar tela de formulário', async function() {
		allureReporter.addTag('Sanity Test');
		allureReporter.addSeverity('normal');

		await form.action.accessFormPage();
		const formTitle = await form.action.getFormTitle();

		expect(formTitle).to.equal(form.assert.attribute.formTitleText, formTitle);
	});

	it('TC-002 | Preencher campo de input e validar', async function() {
		allureReporter.addTag('Functional Test');
		allureReporter.addSeverity('normal');

		const inputText = 'Testando campo de input';

		await form.action.accessFormPage();
		await form.action.fillInputField(inputText);
		const result = await form.action.getInputFieldResult();

		expect(result).to.equal(inputText, result);
	});

	it('TC-003 | Ativar botão switch', async function() {
		allureReporter.addTag('Functional Test');
		allureReporter.addSeverity('minor');

		await form.action.accessFormPage();
		await form.action.clickSwitchButton();
	});

	it('TC-004 | Selecionar item no dropdown', async function() {
		allureReporter.addTag('Functional Test');
		allureReporter.addSeverity('minor');

		await form.action.accessFormPage();
		await form.action.clickDropDownButton();
		await form.action.selectDropDownOption();
	});

	it('TC-005 | Confirmar ação com botão "Active"', async function() {
		allureReporter.addTag('Functional Test');
		allureReporter.addSeverity('normal');

		await form.action.accessFormPage();
		await form.action.clickActiveButton();
		await form.action.clickConfirmButton();
	});

	it('TC-006 | Cancelar ação após clicar em "Active"', async function() {
		allureReporter.addTag('Functional Test');
		allureReporter.addSeverity('normal');

		await form.action.accessFormPage();
		await form.action.clickActiveButton();
		await form.action.clickCancelButton();
	});

	it('TC-007 | Escolher "Ask Me Later"', async function() {
		allureReporter.addTag('Functional Test');
		allureReporter.addSeverity('normal');

		await form.action.accessFormPage();
		await form.action.clickActiveButton();
		await form.action.clickAskMeLaterButton();
	});
});
