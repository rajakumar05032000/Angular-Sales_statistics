const { app, BrowserWindow } = require('electron')


let win;

function createWindow() {
    win = new BrowserWindow({
        width: 600,
        height: 600,
        backgroundColor: '#ffffff',
        icon: `file://assets/images/profile_small.jpg`,
    },
)
    
    win.loadURL(`path.join(__dirname,'../','dist','angular6-redesign','index.html'))`);

    win.webContents.openDevTools()


    win.on('closed', function() {
        win = null
    })
}


app.on('ready',createWindow)

app.on('window-all-closed', function(){
    if(process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate',function() {
    if(win === null) {
        createWindow()
    }
})