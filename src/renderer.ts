import './index.css'
import './styles/index.less'
import { AudioPlayer } from './AudioPlayer'


// ПЕРЕРИСОВКА СТРАНИЦ
// объект, где храним всю информацию
let $: { [key: string]: any } = {}

// перерисовка и обновление данных при изменении параметра
let handler = {
    get: function(target: typeof $, prop: string) {
        // Стандартный возврат значения
        return target[prop]
    },

    set: function(target: typeof $, prop: string, value: any) {
        // Стандартное сохранение значения
        target[prop] = value
        // перерисовываем все элементы с указанным значением
        // динамические параметры храним в <span data-render='?prop'>?value</span>
        document.querySelectorAll(`span[data-render="${prop}"]`).forEach(node => node.innerHTML = value)
        return true
    }
};

let store = new Proxy($, handler)

// СИСТЕМНЫЕ ФУНКЦИИ
class System {

}

let _ = new System();



// ЗАПИСЬ И ЧТЕНИЕ ХРАНИЛИЩА ДАННЫХ 
// сохранение и загрузка игры
// @ts-ignore
const fs =  window.electron.fs;


fs.readFile('test.txt', (err: string, file: Uint8Array): void => {
    if(err) console.log(`Err : ${err}`)
})




console.log('👋 This message is being logged by "renderer.js", included via webpack')


let audioPlayer = new AudioPlayer;
setTimeout(() =>audioPlayer.play('mainMenu'), 1000 )
