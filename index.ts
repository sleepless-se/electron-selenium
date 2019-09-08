const { app, electron, BrowserWindow } = require("electron");
import { MyDriver } from "./my_driver";
let mainWindo;

app.on('ready', function () {
    mainWindo = new BrowserWindow({
        width: 600,
        height: 600
    });
    mainWindo.loadFile('index.html')
    mainWindo.on('closed', function () {
        mainWindo = null;
    })
})

async function driverTest() {
    let my_driver = new MyDriver();
    my_driver.startChrome();
    await my_driver.driver.get("https://google.com");
    await my_driver.driver.sleep(1000);
    await my_driver.driver.quit()
}
driverTest();