/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css'
import './styles/index.less'

// @ts-ignore
const fs =  window.electron.fs;
// @ts-ignore
const bson =  window.electron.BSON;

class CustomSerialize {
    s: string

    constructor() {
        this.s = 'log'
    }


    con(): string {
      return this.s;
    }
}

let obj = new CustomSerialize;

// console.log(bson.deserialize(bson.serialize(obj)));

fs.writeFile ('test.txt', bson.serialize(obj, false, false, true), (err: string): void => {
    if(err) console.log(`Err : ${err}`)
})

fs.readFile('test.txt', (err: string, file: Uint8Array): void => {
    if(err) console.log(`Err : ${err}`)
    console.log(bson.deserialize(file))
})



console.log('👋 This message is being logged by "renderer.js", included via webpack')
