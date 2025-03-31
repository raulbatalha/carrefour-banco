const selector = {
	mainMenu: require('../main-page/selector.js'),
	sideMenu: require('../sidemenu/selector.js'),
	login: require('./selector.js')
};

const TIMEOUT = 30000;

module.exports = {
	accessLoginPage: async function () {
		await selector.mainMenu.pageLogin.waitForExist({ timeout: TIMEOUT });
		await selector.mainMenu.pageLogin.touchAction('tap');

		await selector.login.loginButton.waitForExist({ timeout: TIMEOUT });
		await selector.login.loginButton.touchAction('tap');
	},

	fillEmail: async function (email) {
		await selector.login.emailField.waitForExist({ timeout: TIMEOUT });
		await selector.login.emailField.clearValue();
		await selector.login.emailField.addValue(email);
	},
	
	fillPassword: async function (password) {
		await selector.login.passwordField.waitForExist({ timeout: TIMEOUT });
		await selector.login.passwordField.clearValue();
		await selector.login.passwordField.addValue(password);
	},

	emptyLogin: async function () {
		await selector.login.loginButtonConfirm.waitForExist({ timeout: TIMEOUT });
		await selector.login.loginButtonConfirm.touchAction('tap');

		const messageEmailText = await selector.login.messageEmailField.getText();
		const messagePasswordText = await selector.login.messagePasswordField.getText();

		return { messageEmailText, messagePasswordText };
	},

	invalidEmailLogin: async function (password) {
		await this.fillEmail('invalid-email');
		await this.fillPassword(password);

		await selector.login.loginButtonConfirm.waitForExist({ timeout: TIMEOUT });
		await selector.login.loginButtonConfirm.touchAction('tap');

		const messageEmailText = await selector.login.messageEmailField.getText();
		const messagePasswordText = await selector.login.messagePasswordField.getText();

		return { messageEmailText, messagePasswordText };
	},

	invalidPasswordLogin: async function (email) {
		await this.fillEmail(email);
		await this.fillPassword('123');

		await selector.login.loginButtonConfirm.waitForExist({ timeout: TIMEOUT });
		await selector.login.loginButtonConfirm.touchAction('tap');

		const messagePasswordText = await selector.login.messagePasswordField.getText();

		return { messagePasswordText };
	},

	clickLogin: async function () {
		await selector.login.loginButtonConfirm.waitForExist({ timeout: TIMEOUT });
		await selector.login.loginButtonConfirm.touchAction('tap');
	},

	checkContent: async function () {
		await selector.login.pageTitle.waitForExist({ timeout: TIMEOUT });
		await selector.login.pageDesc.waitForExist({ timeout: TIMEOUT });
		await selector.login.loginButtonConfirm.waitForExist({ timeout: TIMEOUT });

		const pageTitle = await selector.login.pageTitle.getText();
		const pageDesc = await selector.login.pageDesc.getText();
		const loginBtn = await selector.login.loginButtonConfirm.getText();

		return { pageTitle, pageDesc, loginBtn };
	},

	checkLoginState: async function () {
		await selector.sideMenu.loginMessage.waitForExist({ timeout: TIMEOUT });
		const message = await selector.sideMenu.loginMessage.getText();
		return message;
	}
};
