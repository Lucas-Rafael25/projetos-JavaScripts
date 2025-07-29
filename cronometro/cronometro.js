var start = document.getElementById('start')
var pause = document.getElementById('pause')
var reset = document.getElementById('reset')
var timer = document.getElementById('timer')
var interval,time;
var tempoDecorrido = 0
function começar(pause1){
    if(pause1 == 1){
        time = Date.now() - tempoDecorrido
        interval = setInterval(() => {     
        let zero = Date.now() - time
        let hora = Math.floor(zero / 3600000)
        let min = Math.floor((zero % 3600000)/ 60000) 
        let seg = Math.floor((zero % 60000)/ 1000) 
        let mili = zero % 1000
        timer.innerHTML = `${hora}:${min}:${seg}:${mili}`
        start.innerHTML = 'RESTART'
        
        },16)
        }else if(pause1 == 2){
            clearInterval(interval)
            tempoDecorrido = Date.now() - time
        }else{
            clearInterval(interval)
            tempoDecorrido = 0
            timer.innerHTML = '00:00:00.000'
            start.innerHTML = 'START'
            pause.innerHTML = 'PAUSE'
        }
    
}
function pausar(){
    if(pause.innerHTML == 'PAUSE'){
        começar(2)
        pause.innerHTML = 'PAUSED'
    }else{
        começar(1)
        pause.innerHTML = 'PAUSE'
    }
        
}
function resetar(){
    começar(3)
}