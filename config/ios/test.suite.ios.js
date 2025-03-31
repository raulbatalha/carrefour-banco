const path = require('path');

const basePath = path.join(__dirname, '../tests/ios/mocha/');

const testSuite = {
  SanityTest: [
    path.join(basePath, 'TS-001-MainMenu.js'),
    path.join(basePath, 'TS-002-SideMenu.js'),
    path.join(basePath, 'TS-003-LoginLogout.js')
  ],
  NegativeTest: path.join(basePath, 'TS-004-NegativeCase.js')
};

module.exports = { testSuite };