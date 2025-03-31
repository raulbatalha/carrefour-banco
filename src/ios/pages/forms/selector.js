class Forms {
	get formTitle() {
		return $('//XCUIElementTypeStaticText[@name="Form components"]');
	}

	get inputField() {
		return $('//XCUIElementTypeTextField[@name="text-input"]');
	}

	get inputFieldResult() {
		return $('//XCUIElementTypeStaticText[@name="input-text-result"]');
	}

	get switchButton() {
		return $('//XCUIElementTypeSwitch[@name="switch"]');
	}

	get dropDownButton() {
		return $('//XCUIElementTypeTextField[@name="text_input"]'); // Ajustar se o @name for diferente
	}

	get dropDownButtonResult() {
		return $('//XCUIElementTypeTable[@name="com.wdiodemoapp:id/select_dialog_listview"]'); // Ajustar conforme necessário
	}

	get dropDownButtonOption() {
		return $('//XCUIElementTypeStaticText[@name="webdriver.io is awesome"]');
	}

	get activeButton() {
		return $('//XCUIElementTypeOther[@name="button-Active"]/XCUIElementTypeOther');
	}

	get confirmButton() {
		return $('//XCUIElementTypeButton[@name="OK"]'); // ou o nome real do botão no alerta
	}

	get cancelButton() {
		return $('//XCUIElementTypeButton[@name="Cancel"]'); // confirmar nome real
	}

	get askMeLaterButton() {
		return $('//XCUIElementTypeButton[@name="Ask me later"]'); // confirmar nome real
	}
}

module.exports = new Forms();
