import { WebDriver } from "selenium-webdriver";

const { app, electron, ipcMain, BrowserWindow } = require("electron");
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;

let mainWindo;

app.on('ready', function () {
    mainWindo = new BrowserWindow({
        width: 600,
        height: 600
    });
    mainWindo.loadURL('index.html')
    mainWindo.on('closed', function () {
        mainWindo = null;
    })
})

async function startChrome() {
    console.log("chrome driver path " + path);
    const service = new chrome.ServiceBuilder(path).build();
    chrome.setDefaultService(service);
    // const service = new Builder().forBrowser('chrome').build();
    const capabilities = webdriver.Capabilities.chrome();
    capabilities.set('chromeOptions', {
        args: [
            '--no-sandbox',
            '--disable-gpu',
            '--window-size=1980,1200',
        ]
    });

    const driver: WebDriver = new webdriver.Builder()
        .withCapabilities(capabilities)
        .build()
    await driver.get("https://google.com");
    await driver.sleep(1000);
    await driver.quit()
}

let driver = startChrome();