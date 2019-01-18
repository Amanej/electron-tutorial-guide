const {app,BrowserWindow} = require('electron')

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