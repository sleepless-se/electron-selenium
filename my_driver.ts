const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;
const util = require('util');
const exec = util.promisify(require('child_process').exec);

export class MyDriver {
    driver: any = null;
    async startChrome() {
        console.log("chrome driver path " + path);
        const service = new chrome.ServiceBuilder(path).build();
        chrome.setDefaultService(service);
        const capabilities = webdriver.Capabilities.chrome();
        capabilities.set('chromeOptions', {
            args: [
                '--no-sandbox',
                '--disable-gpu',
                '--window-size=1980,1200',
            ]
        });

        this.driver = new webdriver.Builder()
            .withCapabilities(capabilities)
            .build();
    }
    async quit() {
        await this.driver.quit();
        await this.killChromeDriver();
    }
    async killChromeDriver() {
        const { stdout, stderr } = await exec('ps aux | grep chromedriver | grep -v grep | awk \'{ print "kill -9", $2 }\' | sh');
    }
}
