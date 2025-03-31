class Webview {
	get loagingSpinner() {
		return $('//XCUIElementTypeStaticText[@name="LOADING..."]');
	}

	get pageTitle() {
		return $('//XCUIElementTypeStaticText[@name="Next-gen browser and mobile automation test framework for Node.js"]');
	}

	get iconText() {
		return $('//XCUIElementTypeImage[@name="WebdriverIO"]');
	}

	get appLogo() {
		return $('//XCUIElementTypeImage[@name="WebdriverIO"]');
	}

	get searchButton() {
		return $('//XCUIElementTypeButton[@name="Search (Ctrl+K)"]');
	}

	get searchInputField() {
		return $('//XCUIElementTypeButton[@name="Search"]'); // Verifique se o campo realmente é um botão no iOS
	}

	get docSearchInputField() {
		return $('//XCUIElementTypeOther[@name="docsearch-label"]');
	}

	get docSearchResult() {
		return $('(//XCUIElementTypeTable[@name="docsearch-list"])[1]');
	}

	get cleanButton() {
		return $('//XCUIElementTypeButton[@name="Clear the query"]');
	}

	get cancelButton() {
		return $('//XCUIElementTypeButton[@name="Cancel"]');
	}
}

module.exports = new Webview();
