class DragDropScreen {
	get screen() {
		return $('//XCUIElementTypeOther[@name="Drag-drop-screen"]');
	}

	get dragL2() {
		return $('//XCUIElementTypeOther[@name="drag-l2"]');
	}

	get dragC3() {
		return $('//XCUIElementTypeOther[@name="drag-c3"]');
	}

	get dropL1() {
		return $('//XCUIElementTypeOther[@name="drop-l1"]');
	}

	get dropC2() {
		return $('//XCUIElementTypeOther[@name="drop-c2"]');
	}

	get dropR3() {
		return $('//XCUIElementTypeOther[@name="drop-r3"]');
	}
}

module.exports = new DragDropScreen();
