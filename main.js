const {app,ipcMain,BrowserWindow} = require('electron')
const fs = require('fs');

// Lifecycle of the app is managed by electron.app

// Windows created by electron.BrowserWindow
let win

function createWindow() {
    // Create the browser window
    win = new BrowserWindow({width: 800, height: 600})

    // Load the index html
    win.loadFile('index.html')

    // Open devtools
    win.webContents.openDevTools();

    ipcMain.on('block', function() {
        console.log("Block site");
        fs.writeFile("myfile.txt", "Hello world!");
    })

    // Close window event
    win.on('close', () => {
        win = null;
    })
}

app.on('ready',createWindow);

// Quit when window closes
app.on('window-all-closed', () => {
    // MacOS exemption
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  // Reactivate app when icon is clicked
  app.on('activate', () => {
    if (win === null) {
      createWindow()
    }
  })