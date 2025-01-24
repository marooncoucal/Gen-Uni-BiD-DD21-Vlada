const socket = io('ws://localhost:5002')

var values = {
    s1:0,
    s2:0,
    s3:0,
    s4:0,
    s5:0,
    s6:0,
    b1:1,
    b2:1
}

var button1Listeners = []
var button2Listeners = []

// button1Listeners.push( () => console.log('button1 click'))

socket.on('data', msg =>{
    for(let key of Object.keys(msg)){
        values[key] = msg[key]
    }
    if(values.prevButton1Value && !values.b1) button1Listeners.forEach(listener => listener())
    if(values.prevButton2Value && !values.b2) button2Listeners.forEach(listener => listener())
    setDataTexts()
})
let valueTexts = document.querySelectorAll('[data-slider]')

function setDataTexts(){
    for(let valueText of valueTexts){
        let id = valueText.dataset.slider
        valueText.innerHTML = values[id]
    }
}