const horas = document.getElementById("horas");

const minutos = document.getElementById("minutos");

const segundos = document.getElementById("segundo");

const relogio = setInterval(function time(){
    let dateTuday = new Date();

    let hr = dateTuday.getHours();
    let min = dateTuday.getMinutes();
    let seg = dateTuday.getSeconds();

    if(hr < 10 ) hr = "0" + hr;

    if(min < 10 ) min = "0" + min;

    if(seg < 10 ) seg = "0" + seg

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;
})