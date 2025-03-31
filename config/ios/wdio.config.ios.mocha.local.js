const shared = require('../wdio.shared.conf');
const path = require('path');
const suite = require('./test.suite.ios');
const appPath = path.resolve(__dirname, '../../app/ios.simulator.wdio.native.app.v1.0.8.zip');

exports.config = {
  ...shared.config,
  framework: 'mocha',
  specs: [
    path.resolve(__dirname, '../../tests/ios/mocha/TS-*.js')
  ],
  suites: suite.testSuite,
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
