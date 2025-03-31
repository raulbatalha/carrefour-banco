const shared = require('../wdio.shared.conf');
const path = require('path');
const suite = require('./test.suite.android');
const appPath = path.resolve(__dirname, '../../app/android.wdio.native.app.v1.0.8.apk');

exports.config = {
  ...shared.config,
  framework: 'mocha',
  specs: [
    path.resolve(__dirname, '../../tests/android/mocha/TS-*.js')
  ],
  suites: suite.testSuite,
  port: 4723,
  services: ['appium'],
  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'RX8M304HEAD',
    'appium:platformVersion': '12.0',
    'appium:automationName': 'UiAutomator2',
    'appium:app': appPath,
    'appium:autoGrantPermissions': true,
    'appium:noReset': false,
    'appium:appWaitActivity': '*',
    'appium:uiautomator2ServerLaunchTimeout': 60000,
    'appium:uiautomator2ServerInstallTimeout': 60000,
    'appium:chromeOptions': {
      args: ['--disable-popup-blocking']
    },
    'appium:newCommandTimeout': 300,
  }]
};
