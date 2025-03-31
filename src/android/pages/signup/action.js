const selector = {
	mainMenu: require('../main-page/selector.js'),
	sideMenu: require('../sidemenu/selector.js'),
	signUp: require('../selector.js'),
};

const TIMEOUT = 30000;

module.exports = {
	accessSignupPage: async function () {
		await selector.mainMenu.pageLogin.waitForExist({ timeout: TIMEOUT });
		await selector.mainMenu.pageLogin.touchAction('tap');

		await selector.signUp.signedUpButton.waitForExist({ timeout: TIMEOUT });
		await selector.login.signedUpButton.touchAction('tap');
	},

	validSignup: async function (email, password) {
		await selector.signUp.loginField.waitForExist({ timeout: TIMEOUT });
		await selector.signUp.loginField.addValue(email);

		await selector.signUp.passwordField.waitForExist({ timeout: TIMEOUT });
		await selector.signUp.passwordField.addValue(password);

		await selector.signUp.confirmPasswordField.waitForExist({ timeout: TIMEOUT });
		await selector.signUp.confirmPasswordField.addValue(password);

		await selector.signUp.signupButton.waitForExist({ timeout: TIMEOUT });
		await selector.signUp.signupButton.touchAction('tap');

		const messageSuccessText = await selector.signUp.messageSuccessField.getText();
		const messageLoginSuccessText = await selector.signUp.messageLoginSuccessField.getText();
		const messageLoginSuccessButtonText = await selector.signUp.messageLoginSuccessButton.getText();

		return { messageSuccessText, messageLoginSuccessText, messageLoginSuccessButtonText };

		await selector.signUp.messageLoginSuccessButton.waitForExist({ timeout: TIMEOUT });
		await selector.signUp.messageLoginSuccessButton.touchAction('tap');
	},

	emptySignup: async function () {
		await selector.mainMenu.pageLogin.waitForExist({ timeout: TIMEOUT });
		await selector.mainMenu.pageLogin.touchAction('tap');

		await selector.signUp.signupButton.waitForExist({ timeout: TIMEOUT });
		await selector.signUp.signupButton.touchAction('tap');

		const messageEmailText = await selector.signUp.messageEmailField.getText();
		const messagePasswordText = await selector.signUp.messagePasswordField.getText();
		const messageConfirmPasswordText = await selector.signUp.messageConfirmPasswordField.getText();

		return { messageEmailText, messagePasswordText, messageConfirmPasswordText };
	},

	invalidEmailSignup: async function (password, invalidEmail) {
		await selector.mainMenu.pageLogin.waitForExist({ timeout: TIMEOUT });
		await selector.mainMenu.pageLogin.touchAction('tap');

		await selector.signUp.signupButton.waitForExist({ timeout: TIMEOUT });

		await selector.signUp.loginField.waitForExist({ timeout: TIMEOUT });
		await selector.signUp.loginField.addValue(invalidEmail);

		await selector.signUp.passwordField.waitForExist({ timeout: TIMEOUT });
		await selector.signUp.passwordField.addValue(password);

		await selector.signUp.confirmPasswordField.waitForExist({ timeout: TIMEOUT });
		await selector.signUp.confirmPasswordField.addValue(password);

		await selector.signUp.signupButton.waitForExist({ timeout: TIMEOUT });
		await selector.signUp.signupButton.touchAction('tap');

		const messageEmailText = await selector.signUp.messageEmailField.getText();
		return { messageEmailText };
	},

	invalidPasswordSignup: async function (validEmail) {
		await selector.mainMenu.pageLogin.waitForExist({ timeout: TIMEOUT });
		await selector.mainMenu.pageLogin.touchAction('tap');

		await selector.signUp.signupButton.waitForExist({ timeout: TIMEOUT });

		await selector.signUp.loginField.waitForExist({ timeout: TIMEOUT });
		await selector.signUp.loginField.addValue(validEmail);

		await selector.signUp.passwordField.waitForExist({ timeout: TIMEOUT });
		await selector.signUp.passwordField.addValue('123');

		await selector.signUp.confirmPasswordField.waitForExist({ timeout: TIMEOUT });
		await selector.signUp.confirmPasswordField.addValue('123');

		await selector.signUp.signupButton.waitForExist({ timeout: TIMEOUT });
		await selector.signUp.signupButton.touchAction('tap');

		const messagePasswordText = await selector.signUp.messagePasswordField.getText();
		return { messagePasswordText };
	},

	invalidConfirmPasswordSignup: async function (validEmail, password) {
		await selector.mainMenu.pageLogin.waitForExist({ timeout: TIMEOUT });
		await selector.mainMenu.pageLogin.touchAction('tap');

		await selector.signUp.signupButton.waitForExist({ timeout: TIMEOUT });

		await selector.signUp.loginField.waitForExist({ timeout: TIMEOUT });
		await selector.signUp.loginField.addValue(validEmail);

		await selector.signUp.passwordField.waitForExist({ timeout: TIMEOUT });
		await selector.signUp.passwordField.addValue(password);

		await selector.signUp.confirmPasswordField.waitForExist({ timeout: TIMEOUT });
		await selector.signUp.confirmPasswordField.addValue('123'); // confirm diferente

		await selector.signUp.signupButton.waitForExist({ timeout: TIMEOUT });
		await selector.signUp.signupButton.touchAction('tap');

		const messageConfirmPasswordText = await selector.signUp.messageConfirmPasswordField.getText();
		return { messageConfirmPasswordText };
	},

	okSignUp: async function () {
		await selector.signUp.exitButton.waitForExist({ timeout: TIMEOUT });
		await selector.signUp.exitButton.touchAction('tap');
	}
};