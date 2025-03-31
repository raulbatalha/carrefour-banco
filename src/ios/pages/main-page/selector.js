class MainMenu {
	get appLogo() {
		return $('//XCUIElementTypeScrollView[@name="Home-screen"]/XCUIElementTypeOther');
	}

	get pageHome() {
		return $('//XCUIElementTypeStaticText[@name="Home"]');
	}

	get pageWebview() {
		return $('//XCUIElementTypeStaticText[@name="Webview"]');
	}

	get pageLogin() {
		return $('(//XCUIElementTypeStaticText[@name="Login"])[2]');
	}

	get pageForm() {
		return $('//XCUIElementTypeStaticText[@name="Forms"]');
	}

	get pageSwipe() {
		return $('//XCUIElementTypeStaticText[@name="Swipe"]');
	}

	get pageDrag() {
		return $('//XCUIElementTypeStaticText[@name="Drag"]');
	}

	get frameLayout() {
		return $('//XCUIElementTypeOther[@name="android:id/content"]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]');
	}
}

module.exports = new MainMenu();
