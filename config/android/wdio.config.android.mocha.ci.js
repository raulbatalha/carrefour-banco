const shared = require('../wdio.shared.conf');
const path = require('path');
const suite = require('./test.suite.android');

exports.config = {
  ...shared.config,
  framework: 'mocha',

  specs: [
    path.resolve(__dirname, '../../tests/android/mocha/TS-*.js')
  ],
  suites: suite.testSuite,

  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  region: 'us',

  services: [
    ['browserstack', { browserstackLocal: true }]
  ],

  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Google Pixel 7',
    'appium:platformVersion': '13.0',
    'appium:automationName': 'UiAutomator2',
    'appium:app': 'storage:filename=android.wdio.native.app.v1.0.8.apk',

    'bstack:options': {
      projectName: 'MobileUI Automation',
      buildName: `android.mocha.ci.${process.env.BUILD}`,
      sessionName: process.env.BUILDNAME || 'Login & Regression Test',
      appiumVersion: '2.0.0',
      local: true,
      debug: true,
      networkLogs: true
    }
  }]
};
