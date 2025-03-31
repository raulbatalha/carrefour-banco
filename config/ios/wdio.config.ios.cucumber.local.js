const shared = require('../wdio.shared.conf');
const path = require('path');
const appPath = path.resolve(__dirname, '../../app/ios.simulator.wdio.native.app.v1.0.8.zip');

exports.config = {
  ...shared.config,
  framework: 'cucumber',
  specs: [
    path.resolve(__dirname, '../../tests/ios/cucumber/features/*.feature')
  ],
  port: 4723,
  services: ['appium'],
  capabilities: [{
    platformName: 'iOS',
    'appium:deviceName': 'iPhone 8',
    'appium:platformVersion': '16.4',
    'appium:automationName': 'XCUITest',
    'appium:app': appPath,
    'appium:deviceOrientation': 'portrait',
    'appium:noReset': false
  }]
};
