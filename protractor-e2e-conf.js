  // ./node_modules/protractor/bin/webdriver-manager update
  // ./node_modules/protractor/bin/webdriver-manager start


exports.config = {
//  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: 'http://localhost:8000',
  specs: ['test/e2e/**/*.js']
};