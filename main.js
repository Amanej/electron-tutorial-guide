const {app,BrowserWindow} = require('electron')

// Lifecycle of the app is managed by electron.app

// Windows created by electron.BrowserWindow

function createWindow() {
    // Create the browser window
    win = new BrowserWindow({width: 800, height: 600})

    // Load the index html
    win.loadFile('index.html')

}

app.on('ready',createWindow);