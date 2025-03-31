const shared = require('../wdio.shared.conf');
const path = require('path');
const suite = require('./test.suite.ios');

exports.config = {
  ...shared.config,
  framework: 'mocha',

  specs: [
    path.resolve(__dirname, '../../tests/ios/mocha/TS-*.js')
  ],
  suites: suite.testSuite,

  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  region: 'us',

  services: [
    ['browserstack', { browserstackLocal: true }]
  ],

  capabilities: [{
    platformName: 'iOS',
    'appium:deviceName': 'iPhone 14',
    'appium:platformVersion': '16.2',
    'appium:automationName': 'XCUITest',
    'appium:app': 'storage:filename=ios.simulator.wdio.native.app.v1.0.8.zip',

    'bstack:options': {
      projectName: 'MobileUI Automation',
      buildName: `ios.mocha.ci.${process.env.BUILD}`,
      sessionName: process.env.BUILDNAME || 'Mocha iOS Tests',
      appiumVersion: '2.0.0',
      local: true,
      debug: true,
      networkLogs: true
    }
  }]
};
