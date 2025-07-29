var start = document.getElementById('start')
var pause = document.getElementById('pause')
var reset = document.getElementById('reset')
var timer = document.getElementById('timer')
var interval,time;
var tempoDecorrido = 0
function começar(pause1=0,rec=0){
    if(pause1 == 1 || start.value == 'cmc'){
        start.value = 'comecei'
        time = Date.now() - tempoDecorrido
        interval = setInterval(() => {     
        let zero = Date.now() - time
        let hora = Math.floor(zero / 3600000)
        let min = Math.floor((zero % 3600000) / 60000) 
        let seg = Math.floor((zero % 60000) / 1000) 
        let mili = zero % 1000
        timer.innerHTML = `${hora}:${min}:${seg}:${mili}`
        },16)
        }
        if(pause1 == 2 ){
                clearInterval(interval)
                tempoDecorrido = Date.now() - time
        }
        if(pause1==3){
            if(start.value == 'comecei'){
                clearInterval(interval)
                tempoDecorrido = 0
                timer.innerHTML = '00:00:00.000'
                start.value = 'cmc'
                pause.innerHTML = 'PAUSE'
            }
            
        }
}
function pausar(){
    if(timer.innerHTML == '00:00:00.000'){
        alert('O tempo está zerado, impossível pausar o cronômetro')
    }else if(pause.innerHTML == 'PAUSE'){
        começar(2)
        pause.innerHTML = 'PAUSED'
    }else{
        pause.innerHTML = 'PAUSE'
        começar(1)
    }
        
}
function resetar(){
    if(timer.innerHTML == '00:00:00.000'){
        alert('impossível resetar, o cronômetro não foi iniciado')
        return
    }else{começar(3)}
    
}