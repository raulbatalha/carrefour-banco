const expect = require('chai').expect;
const allureReporter = require('@wdio/allure-reporter').default;

const login = {
	action: require('../../../src/android/pages/login/action.js'),
	assert: require('../../../src/android/pages/login/assert.js')
};

const user = require('../../../src/utils/users.data.js');
const common = require('../../../src/utils/common.data.js');

describe('TS-003 | Login', function() {

	it('TC-001 | Acessar tela de login', async function() {
		allureReporter.addTag('Sanity Test');
		allureReporter.addSeverity('normal');

		await login.action.accessLoginPage();
		const response = await login.action.checkContent();

		expect(response.pageDesc).equal(login.assert.attribute.pageDescText, response.pageDesc);
	});

	it('TC-002 | Validação de campos obrigatórios', async function() {
		allureReporter.addTag('Negative Test');
		allureReporter.addSeverity('critical');

		await login.action.accessLoginPage();
		const messages = await login.action.emptyLogin();

		expect(messages.messageEmailText.toLowerCase()).to.include('required');
		expect(messages.messagePasswordText.toLowerCase()).to.include('required');
	});

	it('TC-003 | Email inválido', async function() {
		allureReporter.addTag('Negative Test');
		allureReporter.addSeverity('critical');

		await login.action.accessLoginPage();
		const messages = await login.action.invalidEmailLogin(common.password);

		expect(messages.messageEmailText).equal(login.assert.attribute.invalidEmailMessage, messages.messageEmailText);
		expect(messages.messagePasswordText).to.equal('');
	});

	it('TC-004 | Senha inválida', async function() {
		allureReporter.addTag('Negative Test');
		allureReporter.addSeverity('critical');

		await login.action.accessLoginPage();
		const messages = await login.action.invalidPasswordLogin(user.validEmail);

		expect(messages.messagePasswordText).equal(login.assert.attribute.invalidPasswordMessage, messages.messagePasswordText);
	});

	it('TC-005 | Login com sucesso', async function() {
		allureReporter.addTag('Sanity Test');
		allureReporter.addSeverity('blocker');

		await login.action.accessLoginPage();
		await login.action.fillEmail(user.validEmail);
		await login.action.fillPassword(common.password);
		await login.action.clickLogin();

		const loginState = await login.action.checkLoginState();
		expect(loginState).equal(login.assert.attribute.loginSucessText, loginState);
	});
});
