class DragDropScreen {
	get screen() {return $('~Drag-drop-screen');}
	get dragL2() {return $('~drag-l2');}
	get dragC3() {return $('~drag-c3');}
	get dropL1() {return $('~drop-l1');}
	get dropC2() {return $('~drop-c2');}
	get dropR3() {return $('~drop-r3');}
}

module.exports = new DragDropScreen();
