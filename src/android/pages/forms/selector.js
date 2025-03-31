class Forms {
	get formTitle () { return $('//android.widget.TextView[@text="Form components"]');}
	get inputField () { return $('//android.widget.EditText[@content-desc="text-input"]');}
	get inputFieldResult () { return $('//android.widget.TextView[@content-desc="input-text-result"]');}
	get switchButton () { return $('//android.widget.Switch[@content-desc="switch"]');}
	get dropDownButton () { return $('//android.widget.EditText[@resource-id="text_input"]');}
	get dropDownButtonResult () { return $('//android.widget.ListView[@resource-id="com.wdiodemoapp:id/select_dialog_listview"]');}
	get dropDownButtonOption () { return $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="webdriver.io is awesome"]');}
	get activeButton () { return $('//android.view.ViewGroup[@content-desc="button-Active"]/android.view.ViewGroup');}
	get confirmButton () { return $('//android.widget.Button[@resource-id="android:id/button1"]');}
	get cancelButton () { return $('//android.widget.Button[@resource-id="android:id/button2"]');}
	get askMeLaterButton () { return $('//android.widget.Button[@resource-id="android:id/button3"]');}
}

module.exports = new Forms();