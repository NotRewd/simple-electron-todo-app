const { contextBridge, ipcRenderer } = require('electron/renderer')

contextBridge.exposeInMainWorld('electronAPI', {
  loadTodosFromFolder: () => ipcRenderer.invoke('dialog:loadTodosFromFolder'),
  saveTodos: (todos) => ipcRenderer.send('saveTodos', todos),
  onTodosRequested: (callback) =>
  {
    ipcRenderer.removeAllListeners('requestTodos');
    ipcRenderer.on('requestTodos', callback);
  }
})