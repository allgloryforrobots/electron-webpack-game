import fs from 'fs'

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
  'electron',
  {
    fs
  }
)

// Рендер (Main World/Основной Мир)

// window.electron.doThing()