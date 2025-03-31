class SideMenu {
	get sideMenu() {
		return $('//XCUIElementTypeButton[@name="Toggle navigation bar"]');
	}

	get pageHome() {
		return $('//XCUIElementTypeOther[@name="Home page"]');
	}

	get contentDescription() {
		return $('//XCUIElementTypeOther[@name="__docusaurus_skipToContent_fallback"]/XCUIElementTypeOther');
	}

	get backToMain() {
		return $('//XCUIElementTypeButton[@name="← Back to main menu"]');
	}

	get sideMenuDocs() {
		return $('//XCUIElementTypeOther[@name="Docs"]');
	}

	get sideMenuApi() {
		return $('//XCUIElementTypeStaticText[@name="API"]');
	}

	get sideMenuBlog() {
		return $('//XCUIElementTypeStaticText[@name="Blog"]');
	}

	get sideMenuContribute() {
		return $('//XCUIElementTypeStaticText[@name="Contribute"]');
	}

	get sideMenuComunity() {
		return $('//XCUIElementTypeStaticText[@name="Community"]');
	}

	get sideMenuSponsor() {
		return $('//XCUIElementTypeStaticText[@name="Sponsor"]');
	}

	get sideMenuV9() {
		return $('//XCUIElementTypeStaticText[@name="v9"]');
	}

	get sideMenuLanguage() {
		return $('//XCUIElementTypeButton[@name="Languages"]');
	}

	get sideMenuLanguageDescription() {
		return $('//XCUIElementTypeOther[@name="Main"]/XCUIElementTypeOther[3]/XCUIElementTypeOther[2]/XCUIElementTypeTable/XCUIElementTypeOther[8]/XCUIElementTypeTable');
	}

	get exitButton() {
		return $('//XCUIElementTypeButton[@name="Close navigation bar"]');
	}
}

module.exports = new SideMenu();
