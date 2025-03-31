const shared = require('../wdio.shared.conf');
const path = require('path');

exports.config = {
  ...shared.config,
  framework: 'cucumber',
  specs: [
    path.resolve(__dirname, '../../tests/android/cucumber/features/*.feature')
  ],
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  region: 'us',
  services: [
    ['browserstack', { browserstackLocal: true }]
  ],
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Android GoogleAPI Emulator',
    'appium:platformVersion': '13.0',
    'appium:automationName': 'UiAutomator2',
    'appium:app': 'storage:filename=android.wdio.native.app.v1.0.8.apk',
    'browser:options': {
      appiumVersion: '2.0.0-beta66',
      build: `android.cucumber.ci.${process.env.BUILD}`,
      name: process.env.BUILDNAME,
      public: 'public'
    }
  }]
};