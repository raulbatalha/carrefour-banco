class Login {
	get loginButton() {
		return $('//XCUIElementTypeStaticText[@name="Login"]');
	}

	get loginField() {
		return $('//XCUIElementTypeTextField[@name="input-email"]');
	}

	get passwordField() {
		return $('//XCUIElementTypeSecureTextField[@name="input-password"]');
	}

	get loginButtonConfirm() {
		return $('//XCUIElementTypeOther[@name="button-LOGIN"]/XCUIElementTypeOther');
	}

	get messageEmailField() {
		return $('//XCUIElementTypeStaticText[@name="Please enter a valid email address"]');
	}

	get messagePasswordField() {
		return $('//XCUIElementTypeStaticText[@name="Please enter at least 8 characters"]');
	}

	get messageLoginSuccess() {
		return $('//XCUIElementTypeStaticText[@name="Success"]');
	}

	get messageLoginSuccessText() {
		return $('//XCUIElementTypeStaticText[@name="You are successfully logged in."]');
	}

	get messageLoginSuccessButton() {
		return $('//XCUIElementTypeButton[@name="OK"]'); 
	}
}

module.exports = new Login();
