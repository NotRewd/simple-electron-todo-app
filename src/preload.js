const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
  loadTodosFromFolder: () => ipcRenderer.invoke('dialog:loadTodosFromFolder'),
  onTodosRequested: (callback) => ipcRenderer.on('todosRequested', (event, todos) => callback(todos)),
  todosRecieved: (todos) => ipcRenderer.send('todosRecieved', todos)
})