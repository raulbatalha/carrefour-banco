const path = require('path');

const basePath = path.join(__dirname, '../tests/android/mocha/');

const testSuite = {
  SanityTest: [
    path.join(basePath, 'TS-001-Home.js'),
    path.join(basePath, 'TS-002-Webview.js'),
    path.join(basePath, 'TS-003-Login.js'),
    path.join(basePath, 'TS-004-Signup.js'),
    path.join(basePath, 'TS-005-Forms.js'),
    path.join(basePath, 'TS-006-Swipe.js'),
    path.join(basePath, 'TS-007-Drop.js')
  ]
};

module.exports = { testSuite };