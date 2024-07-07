const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const { readdirSync, readFileSync, writeFileSync } = require('fs');

let todoFolder = '';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

async function handleLoadTodosFromFolder () {
  const { canceled, filePaths } = await dialog.showOpenDialog(
    {
      properties: ['openDirectory']
    }
  );

  if (!canceled) {
    todoFolder = filePaths[0];
    const files = readdirSync(todoFolder);

    let todosJson = []

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.endsWith('.json')) {
        const filePath = directoryPath + '/' + file;
        const fileContent = readFileSync(filePath, 'utf8');
        const todos = JSON.parse(fileContent);
        todosJson = todosJson.concat(todos);
      }
    }

    return todosJson
  }
}

const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
    titleBarStyle: "hidden",
    titleBarOverlay: true,
  });

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() =>
{
  ipcMain.handle('dialog:loadTodosFromFolder', handleLoadTodosFromFolder);

  createWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
