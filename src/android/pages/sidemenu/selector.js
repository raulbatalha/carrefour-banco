class SideMenu {	
	get sideMenu() { return $('//android.widget.Button[@text="Toggle navigation bar"]');}
	
	get pageHome() { return $('//android.view.View[@content-desc="Home page"]');}
	get contentDescription() { return $('//android.view.View[@resource-id="__docusaurus_skipToContent_fallback"]/android.view.View');}
	get backToMain() { return $('//android.widget.Button[@text="← Back to main menu"]');}
	get sideMenuDocs() { return $('//android.view.View[@content-desc="Docs"]');}
	get sideMenuApi() { return $('//android.widget.TextView[@text="API"]');}
	get sideMenuBlog() { return $('//android.widget.TextView[@text="Blog"]');}
	get sideMenuContribute() { return $('//android.widget.TextView[@text="Contribute"]');}
	get sideMenuComunity() { return $('//android.widget.TextView[@text="Community"]');}
	get sideMenuSponsor() { return $('//android.widget.TextView[@text="Sponsor"]');}
	get sideMenuV9() { return $('//android.widget.TextView[@text="v9"]');}
	get sideMenuLanguage() { return $('//android.widget.Button[@text="Languages"]');}
	get sideMenuLanguageDescription() { return $('//android.view.View[@text="Main"]/android.view.View[3]/android.view.View[2]/android.widget.ListView/android.view.View[8]/android.widget.ListView');}
	get exitButton() { return $('//android.widget.Button[@text="Close navigation bar"]');}
}

module.exports = new SideMenu();