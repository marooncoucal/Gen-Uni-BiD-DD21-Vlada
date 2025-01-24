import { SerialPort, ReadlineParser } from 'serialport'
import express from 'express'
import * as url from 'url'
import { Server } from 'socket.io'
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))

const io = new Server({
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

io.listen(5002)

// let port = new SerialPort({
//     path: 'COM9',
//     baudRate: 9600,
//     autoOpen: false
// })
let port

let parser

let serialPorts = [
    'COM0',
    'COM1',
    'COM2',
    'COM3',
    'COM4',
    'COM5',
    'COM6',
    'COM7',
    'COM8',
    'COM9',
]
let serialPortIndex = parseInt(process.argv[2])


parser = new ReadlineParser()

port = new SerialPort({
    path: serialPorts[serialPortIndex],
    baudRate: 9600,
    autoOpen: false
})
port.pipe(parser)


let startSerial = () => {
    console.log('using port ' + port.path)
    console.log(port && port.isOpen ? 'port opened' : 'port not opened')
    if (port && !port.isOpen) {
        port.open(error => {
            //serialPortIndex++
            if (serialPortIndex > serialPorts.length - 1) serialPortIndex = 0
            setTimeout(startSerial, 3000)
        })
    }
}


startSerial();





let buttonState1 = 1;
let buttonState2 = 1;

parser.on('data', json => {
    try {
        let prevButton1State = buttonState1
        let prevButton2State = buttonState2
        let data = JSON.parse(json)
        if (data['b1'] !== undefined) buttonState1 = data.b1
        if (data['b2'] !== undefined) buttonState2 = data.b2
        data.prevButton1Value = prevButton1State
        data.prevButton2Value = prevButton2State
        io.emit('data', data)
    }
    //при ошибке
    catch {
        console.log('data error')
    }
})


const app = express()

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

app.listen(5001)

// cmd
// node server.mjs №
// http://localhost:5001/