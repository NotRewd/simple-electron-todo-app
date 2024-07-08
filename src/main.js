const { app, BrowserWindow, Menu, ipcMain, dialog } = require('electron');
const { readdirSync, readFileSync, writeFileSync, unlinkSync } = require('fs');

let todoFolder = '';
let mainWindow = null;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const handleFileSave = () =>
{
  mainWindow.webContents.send("requestTodos");
};

const saveTodos = (event, todos) =>
{
  if (todos)
  {
    const folders = readdirSync(todoFolder);

    for (let i = 0; i < folders.length; i++)
    {
      const folder = folders[i];
      if (folder.startsWith('todo-') && folder.endsWith('.json'))
      {
        const filePath = todoFolder + '/' + folder;
        unlinkSync(filePath);
      }
    }

    for (let i = 0; i < todos.length; i++)
    {
      const todo = todos[i];
      const filePath = todoFolder + '/todo-' + i + '.json';
      const fileContent = JSON.stringify(todo);
      writeFileSync(filePath, fileContent, 'utf8');
    }
  }
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
        const filePath = todoFolder + '/' + file;
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
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
    titleBarStyle: "hidden",
    titleBarOverlay: true,
  });

  const { app, Menu } = require('electron')

  const isMac = process.platform === 'darwin'

  const template = [
    // { role: 'appMenu' }
    ...(isMac
      ? [{
          label: "Simple Todo App",
          submenu: [
            { role: 'about' },
            { type: 'separator' },
            { role: 'services' },
            { type: 'separator' },
            { role: 'hide' },
            { role: 'hideOthers' },
            { role: 'unhide' },
            { type: 'separator' },
            { role: 'quit' }
          ]
        }]
      : []),
    {
      label: 'File',
      submenu: [
        {
          label: 'Save',
          click: handleFileSave
        },
        isMac ? { role: 'close' } : { role: 'quit' }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        ...(isMac
          ? [
              { role: 'pasteAndMatchStyle' },
              { role: 'delete' },
              { role: 'selectAll' },
              { type: 'separator' },
              {
                label: 'Speech',
                submenu: [
                  { role: 'startSpeaking' },
                  { role: 'stopSpeaking' }
                ]
              }
            ]
          : [
              { role: 'delete' },
              { type: 'separator' },
              { role: 'selectAll' }
            ])
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'zoom' },
        ...(isMac
          ? [
              { type: 'separator' },
              { role: 'front' },
              { type: 'separator' },
              { role: 'window' }
            ]
          : [
              { role: 'close' }
            ])
      ]
    }
  ]

  const menu = Menu.buildFromTemplate(template);

  Menu.setApplicationMenu(menu);

  // and load the index.html of the app.
  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() =>
{
  ipcMain.handle('dialog:loadTodosFromFolder', handleLoadTodosFromFolder);
  ipcMain.on('saveTodos', saveTodos);

  createWindow();

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () =>
{
  app.quit();
});