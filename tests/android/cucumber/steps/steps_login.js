const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');

const login = {
	action: require('../../../../src/android/pages/login/action.js'),
	assert: require('../../../../src/android/pages/login/assert.js')
};

const user = require('../../../../src/utils/users.data.js');
const common = require('../../../../src/utils/common.data.js');

Given(
	/^the WDIO Natice app is launched$/,
	async function () {
		await login.action.accessLoginPage();
	}
);

Given(
	/^I am on the login screen$/,
	async function () {
		const response = await login.action.checkContent();

		expect(response.pageTitle).to.equal(login.assert.attribute.pageTitleText, response.pageTitle);
		expect(response.pageDesc).to.equal(login.assert.attribute.pageDescText, response.pageDesc);
		expect(response.loginBtn).to.equal(login.assert.attribute.loginBtnText, response.loginBtn);
	}
);

When(
	/^I enter "([^"]*)" in the username field$/,
	async function (username) {
		await login.action.fillEmail(username);
	}
);

When(
	/^I enter a valid password$/,
	async function () {
		await login.action.fillPassword(common.password);
	}
);

When(
	/^I enter an invalid password$/,
	async function () {
		await login.action.fillPassword(common.invalidPassword);
	}
);

When(
	/^I tap the login button$/,
	async function () {
		await login.action.clickLogin();
	}
);

Then(
	/^I should be logged in successfully$/,
	async function () {
		const response = await login.action.checkLoginState();

		expect(response).to.equal(login.assert.attribute.loginSucessText, response);
	}
);

Then(
	/^I should see an error message indicating "([^"]*)"$/,
	async function (expectedMessage) {
		const response = await login.action.checkLoginStateExpectErrorMessage();
		expect(response).to.equal(expectedMessage);
	}
);
