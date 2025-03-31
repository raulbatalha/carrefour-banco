class Swipe {
	get swipeTitle() {
		return $('//XCUIElementTypeStaticText[@name="Swipe horizontal"]');
	}

	get swipeText() {
		return $('//XCUIElementTypeStaticText[@name="Or swipe vertical to find what I\'m hiding."]');
	}

	get carousel() {
		return $('~Carousel');
	}

	get card1() {
		return $('(//XCUIElementTypeOther[@name="card"])[1]');
	}

	get card2() {
		return $('(//XCUIElementTypeOther[@name="card"])[2]');
	}
}

module.exports = new Swipe();
