import fs from 'fs'
import BSON from 'bson'

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
  'electron',
  {
    fs, BSON
  }
)

// Рендер (Main World/Основной Мир)

// window.electron.doThing()