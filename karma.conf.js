process.env.CHROME_BIN = require('puppeteer').executablePath();
const isDocker = require('is-docker')();

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-mocha-reporter'),
      require('karma-junit-reporter'),
    ],
    client: {
      clearContext: false,
    },
    jasmineHtmlReporter: {
      suppressAll: true,
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/ng-crud-clean-architecture'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' },
        { type: 'lcovonly' },
        { type: 'cobertura' },
      ],
      thresholds: {
        emitWarning: true,
        skipFilesWithNoCoverage: true,
        global: {
          statements: 70,
          lines: 70,
          branches: 70,
          functions: 70,
        },
        each: {
          statements: 70,
          lines: 70,
          branches: 70,
          functions: 70,
          overrides: {},
        },
      },
    },
    reporters: ['coverage', 'mocha', 'progress', 'kjhtml', 'junit'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome', 'ChromeHeadless'],
    customLaunchers: {
      HeadlessChrome: {
        base: 'ChromeHeadless',
        flags: isDocker ? ['--no-sandbox'] : [],
      },
    },
    concurrency: Infinity,
    singleRun: false,
    restartOnFileChange: true,
  });
};
