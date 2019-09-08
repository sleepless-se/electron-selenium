const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;

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
}
