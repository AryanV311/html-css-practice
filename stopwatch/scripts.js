let mili = 0;
let sec = 0;
let min = 0;
let hr = 0;
let isStart = false;
let timer;

function start() {
    if (!isStart) {
        isStart = true;
        timer = setInterval(myfunc, 10);
    }
}

function stop() {
    isStart = false;
    clearInterval(timer); 
}

function reset() {
    clearInterval(timer); 
    mili = 0;
    sec = 0;
    min = 0;
    hr = 0;
    isStart = false;
    updateDisplay();
}

function myfunc() {
    mili += 1;
    if (mili === 100) {
        sec += 1;
        mili = 0;
    }
    if (sec === 60) {
        min += 1;
        sec = 0;
    }
    if (min === 60) {
        hr += 1;
        min = 0;
    }
    updateDisplay();
}

function updateDisplay() {
    document.querySelector(".mili").innerText = mili < 10 ? "0" + mili : mili;
    document.querySelector(".sec").innerText = sec < 10 ? "0" + sec : sec;
    document.querySelector(".min").innerText = min < 10 ? "0" + min : min;
    document.querySelector(".hr").innerText = hr < 10 ? "0" + hr : hr;
}

document.querySelector(".start").addEventListener("click", start);
document.querySelector(".stop").addEventListener("click", stop);
document.querySelector(".reset").addEventListener("click", reset);
