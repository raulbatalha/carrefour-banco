class Signup {
	get signedUpButton () { return $('//android.widget.TextView[@text="Sign up"]');}
	get loginField () { return $('//android.widget.EditText[@content-desc="input-email"]');}
	get passwordField () { return $('//android.widget.EditText[@content-desc="input-password"]');}
	get confirmPasswordField () { return $('//android.widget.EditText[@content-desc="input-repeat-password"]');}
	get signupButton () { return $('//android.view.ViewGroup[@content-desc="button-SIGN UP"]/android.view.ViewGroup');}
	get messageEmailField () { return $('//android.widget.TextView[@text="Please enter a valid email address"]');}
	get messagePasswordField () { return $('//android.widget.TextView[@text="Please enter at least 8 characters"]');}
	get messageConfirmPasswordField () { return $('//android.widget.TextView[@text="Please enter the same password"]');}
	get messageSuccessField () { return $('//android.widget.TextView[@resource-id="android:id/alertTitle"]');}
	get messageLoginSuccessField () { return $('//android.widget.TextView[@resource-id="android:id/message"]"]');}
	get messageLoginSuccessButton () { return $('//android.widget.Button[@resource-id="android:id/button1"]');}
}

module.exports = new Signup();