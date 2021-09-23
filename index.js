const { Builder } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');

(async function myFunction() {
    const options = new firefox.Options();
    options.headless();

    const driver = await new Builder()
        .forBrowser('firefox')
        .setFirefoxOptions(options)
        .build();

    await driver.get('https://tobycook.dev');
})();
  
