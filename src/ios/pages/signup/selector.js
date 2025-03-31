class Signup {
	get signedUpButton() {
		return $('//XCUIElementTypeStaticText[@name="Sign up"]');
	}

	get loginField() {
		return $('//XCUIElementTypeTextField[@name="input-email"]');
	}

	get passwordField() {
		return $('//XCUIElementTypeSecureTextField[@name="input-password"]');
	}

	get confirmPasswordField() {
		return $('//XCUIElementTypeSecureTextField[@name="input-repeat-password"]');
	}

	get signupButton() {
		return $('//XCUIElementTypeOther[@name="button-SIGN UP"]/XCUIElementTypeOther');
	}

	get messageEmailField() {
		return $('//XCUIElementTypeStaticText[@name="Please enter a valid email address"]');
	}

	get messagePasswordField() {
		return $('//XCUIElementTypeStaticText[@name="Please enter at least 8 characters"]');
	}

	get messageConfirmPasswordField() {
		return $('//XCUIElementTypeStaticText[@name="Please enter the same password"]');
	}

	get messageSuccessField() {
		return $('//XCUIElementTypeStaticText[@name="Success"]'); // Ajustar se o alerta tiver outro título
	}

	get messageLoginSuccessField() {
		return $('//XCUIElementTypeStaticText[@name="You are successfully logged in."]');
	}

	get messageLoginSuccessButton() {
		return $('//XCUIElementTypeButton[@name="OK"]'); 
	}
}

module.exports = new Signup();
