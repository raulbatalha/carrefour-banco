class Webview {	
	get loagingSpinner() { return $('//android.widget.TextView[@text="LOADING..."]');}
	get pageTitle() { return $('//android.widget.TextView[@text="Next-gen browser and mobile automation test framework for Node.js"]');}
	get iconText() { return $('//android.widget.Image[@text="WebdriverIO"]');}
	get appLogo() { return $('//android.widget.Image[@text="WebdriverIO"]');}
	get searchButton() { return $('//android.widget.Button[@text="Search (Ctrl+K)"]');}
	get searchInputField() { return $('//android.widget.Button[@text="Search"]');}
	get docSearchInputField() { return $('//android.view.View[@resource-id="docsearch-label"]');}
	get docSearchResult() { return $('(//android.widget.ListView[@resource-id="docsearch-list"])[1]');}
	get cleanButton() { return $('//android.widget.Button[@text="Clear the query"]');}
	get cancelButton() { return $('//android.widget.Button[@text="Cancel"]');}
}

module.exports = new Webview();