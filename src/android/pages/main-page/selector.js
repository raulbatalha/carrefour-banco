class MainMenu {
	get appLogo() { return $('//android.widget.ScrollView[@content-desc="Home-screen"]/android.view.ViewGroup/android.widget.ImageView[1]');}
	get pageHome() { return $('//android.widget.TextView[@text="Home"]');}
	get pageWebview() { return $('//android.widget.TextView[@text="Webview"]');}
	get pageLogin() { return $('(//android.widget.TextView[@text="Login"])[2]');}
	get pageForm() { return $('//android.widget.TextView[@text="Forms"]');}
	get pageSwipe() { return $('//android.widget.TextView[@text="Swipe"]');}
	get pageDrag() { return $('//android.widget.TextView[@text="Drag"]');}
	get frameLayout() { return $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]');}
}

module.exports = new MainMenu();