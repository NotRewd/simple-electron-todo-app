const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
  loadTodosFromFolder: () => ipcRenderer.invoke('dialog:loadTodosFromFolder')
})