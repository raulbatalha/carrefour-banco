const selector = {
	mainMenu: require('../main-page/selector.js'),
	formPage: require('./selector.js'),
};

const TIMEOUT = 30000;

module.exports = {
	accessFormPage: async function () {
		await selector.mainMenu.pageForm.waitForExist({ timeout: TIMEOUT });
		await selector.mainMenu.pageForm.touchAction('tap');
	},

	fillInputField: async function (text) {
		await selector.formPage.inputField.waitForExist({ timeout: TIMEOUT });
		await selector.formPage.inputField.clearValue();
		await selector.formPage.inputField.addValue(text);
	},

	getInputFieldResult: async function () {
		await selector.formPage.inputFieldResult.waitForExist({ timeout: TIMEOUT });
		return await selector.formPage.inputFieldResult.getText();
	},

	clickSwitchButton: async function () {
		await selector.formPage.switchButton.waitForExist({ timeout: TIMEOUT });
		await selector.formPage.switchButton.touchAction('tap');
	},

	clickDropDownButton: async function () {
		await selector.formPage.dropDownButton.waitForExist({ timeout: TIMEOUT });
		await selector.formPage.dropDownButton.touchAction('tap');
	},

	selectDropDownOption: async function () {
		await selector.formPage.dropDownButtonOption.waitForExist({ timeout: TIMEOUT });
		await selector.formPage.dropDownButtonOption.touchAction('tap');
	},

	clickActiveButton: async function () {
		await selector.formPage.activeButton.waitForExist({ timeout: TIMEOUT });
		await selector.formPage.activeButton.touchAction('tap');
	},

	clickConfirmButton: async function () {
		await selector.formPage.confirmButton.waitForExist({ timeout: TIMEOUT });
		await selector.formPage.confirmButton.touchAction('tap');
	},
	
	clickCancelButton: async function () {
		await selector.formPage.cancelButton.waitForExist({ timeout: TIMEOUT });
		await selector.formPage.cancelButton.touchAction('tap');
	},

	clickAskMeLaterButton: async function () {
		await selector.formPage.askMeLaterButton.waitForExist({ timeout: TIMEOUT });
		await selector.formPage.askMeLaterButton.touchAction('tap');
	},
	
	getFormTitle: async function () {
		await selector.formPage.formTitle.waitForExist({ timeout: TIMEOUT });
		return await selector.formPage.formTitle.getText();
	}
};
