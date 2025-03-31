
class Login {
	get loginButton () { return $('//android.widget.TextView[@text="Login"]');}
	get loginField () { return $('//android.widget.EditText[@content-desc="input-email"]');}
	get passwordField () { return $('//android.widget.EditText[@content-desc="input-password"]');}
	get loginButtonConfirm () { return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup');}
	get messageEmailField () { return $('//android.widget.TextView[@text="Please enter a valid email address"]');}
	get messagePasswordField () { return $('//android.widget.TextView[@text="Please enter at least 8 characters"]');}
	get messageLoginSuccess () { return $('//android.widget.TextView[@resource-id="android:id/alertTitle"]');}
	get messageLoginSuccessText () { return $('//android.widget.TextView[@resource-id="android:id/message"]');}
	get messageLoginSuccessButton () { return $('//android.widget.Button[@resource-id="android:id/button1"]');}
}

module.exports = new Login();