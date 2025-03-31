const expect = require('chai').expect;
const allureReporter = require('@wdio/allure-reporter').default;

const signup = {
	action: require('../../../src/android/pages/signup/action.js'),
	assert: require('../../../src/android/pages/signup/assert.js')
};

const user = require('../../../src/utils/users.data.js');
const common = require('../../../src/utils/common.data.js');

describe('TS-004 | Cadastro (Signup)', function () {

	it('TC-001 | Cadastro com sucesso', async function () {
		allureReporter.addTag('Sanity Test');
		allureReporter.addSeverity('blocker');

		await signup.action.accessSignupPage();
		const response = await signup.action.validSignup(user.validEmail, common.password);

		expect(response.messageSuccessText).to.equal(signup.assert.attribute.successSignupMessage, response.messageSuccessText);
		expect(response.messageLoginSuccessText).to.equal(signup.assert.attribute.successLoginMessage, response.messageLoginSuccessText);
		expect(response.messageLoginSuccessButtonText).to.equal(signup.assert.attribute.successLoginButtonText, response.messageLoginSuccessButtonText);

		await signup.action.okSignUp();
	});

	it('TC-002 | Validação de campos obrigatórios em branco', async function () {
		allureReporter.addTag('Negative Test');
		allureReporter.addSeverity('critical');

		const messages = await signup.action.emptySignup();

		expect(messages.messageEmailText.toLowerCase()).to.include('required');
		expect(messages.messagePasswordText.toLowerCase()).to.include('required');
		expect(messages.messageConfirmPasswordText.toLowerCase()).to.include('required');
	});

	it('TC-003 | Email inválido', async function () {
		allureReporter.addTag('Negative Test');
		allureReporter.addSeverity('critical');

		const result = await signup.action.invalidEmailSignup(common.password, user.invalidEmail);
		expect(result.messageEmailText).to.equal(signup.assert.attribute.invalidEmailMessage, result.messageEmailText);
	});

	it('TC-004 | Senha inválida', async function () {
		allureReporter.addTag('Negative Test');
		allureReporter.addSeverity('critical');

		const result = await signup.action.invalidPasswordSignup(user.validEmail);
		expect(result.messagePasswordText).to.equal(signup.assert.attribute.invalidPasswordMessage, result.messagePasswordText);
	});

	it('TC-005 | Senha e confirmação diferentes', async function () {
		allureReporter.addTag('Negative Test');
		allureReporter.addSeverity('critical');

		const result = await signup.action.invalidConfirmPasswordSignup(user.validEmail, common.password);
		expect(result.messageConfirmPasswordText).to.equal(signup.assert.attribute.mismatchPasswordMessage, result.messageConfirmPasswordText);
	});
});
