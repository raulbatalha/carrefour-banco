require('dotenv').config();
const allure = require('allure-commandline');

exports.config = {
  runner: 'local',
  logLevel: 'info',
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  outputDir: './logs',

  reporters: [
    'spec',
    [
      'allure',
      {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
        useCucumberStepReporter: false // mudei para true se estiver usando cucumber
      }
    ]
  ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },

  //cucumberOpts: {
  //  timeout: 60000,
  //  require: ['./tests/**/*.steps.js']
  //},

  onComplete: function () {
    const reportError = new Error('Could not generate Allure report');
    const generation = allure(['generate', 'allure-results', '--clean']);
    return new Promise((resolve, reject) => {
      const generationTimeout = setTimeout(() => reject(reportError), 5000);
      generation.on('exit', function (exitCode) {
        clearTimeout(generationTimeout);
        if (exitCode !== 0) return reject(reportError);
        console.log('Allure report successfully generated');
        resolve();
      });
    });
  },

  afterTest: async function (_test, _context, { passed }) {
    if (!passed) {
      const screenshotPath = `./evidencias/screenshot-${Date.now()}.png`;
      await browser.saveScreenshot(screenshotPath);
      console.log(`Screenshot salva em: ${screenshotPath}`);
    }
  },

  onPrepare: function () {
    const fs = require('fs');
    const reportDir = './evidencias';
    if (!fs.existsSync(reportDir)) fs.mkdirSync(reportDir);
    const envInfo = `\nExecução iniciada em: ${new Date().toLocaleString()}\nPlataforma: ${process.env.TEST_PLATFORM || 'android'}\nBrowserStack: ${process.env.BROWSERSTACK_USERNAME ? 'Ativo' : 'Inativo'}`;
    fs.writeFileSync(`${reportDir}/env-info.txt`, envInfo);
    console.log('Log de ambiente criado');
  }
};