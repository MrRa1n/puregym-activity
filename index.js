const { Builder, By, Key, withTagName, until } = require('selenium-webdriver');
const firefox = require('selenium-webdriver/firefox');
const assert = require('assert/strict');

(async function puregym() {
    const options = new firefox.Options();
    options.headless();
    const driver = await new Builder()
        .forBrowser('firefox')
        .setFirefoxOptions(options)
        .build();
    try {
        await driver.get('https://www.puregym.com/members/');

        await driver.findElement(By.name('username')).sendKeys('<USER_EMAIL>');
        await driver.findElement(By.name('password')).sendKeys('<USER_PIN>', Key.ENTER);

        const isDisplayed = await driver.wait(until.elementLocated(By.id('people_in_gym')), 10000).isDisplayed();
        assert(isDisplayed === true);

        const numbersElem = await driver.findElement(By.id('people_in_gym'));
        const peopleInGym = await driver.findElement(withTagName('span').near(numbersElem));

        console.log(await peopleInGym.getText())
    } finally {
        await driver.quit();
    }
})();
  
