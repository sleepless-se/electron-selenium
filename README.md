# [Electron] Selenium running template

This project is for running Selenium on Electron.

Note: This is not for test Electron with Selenium.

## How to use.

```.shell
git clone https://github.com/sleepless-se/electron-selenium.git
cd electron-selenium
npm install
npm start
```

This command can run Selenium on Electron.

You can make automation app by Selenium.

## How to release?

Just run this command. You can build for macOS.

```shell
./node_modules/.bin/electron-packager ./ my_app --overwrite --platform=darwin --arch=x64 --prune=true --out=release-builds
```

You can find built app in `release-builds` folder.

## About Windows...?

This command can build for Windows. But this is not a application of one file. It's need some related files. 

If you commpress the folder, You can release this app for Windows user. 

**Note**: Do not move the .exe file to anothre directory. It's works only in the unziped folder.

```
`./node_modules/.bin/electron-packager ./ my_app --platform=win32 --arch=x64 --overwrite --out=release-builds`
```