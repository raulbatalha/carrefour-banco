class Swipe {
	get swipeTitle() {return $('//android.widget.TextView[@text="Swipe horizontal"]');}
	get swipeText() {return $('//android.widget.TextView[@text="Or swipe vertical to find what I\'m hiding."]');}
	get carousel() {return $('~Carousel');}
	get card1() {return $('(//android.view.ViewGroup[@content-desc="card"])[1]');}
	get card2() {return $('(//android.view.ViewGroup[@content-desc="card"])[2]');}
}

module.exports = new Swipe();
