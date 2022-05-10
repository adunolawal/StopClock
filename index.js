let display = document.getElementById("time")
let startBtn = document.getElementById("startBtn")
let stopBtn = document.getElementById("stopBtn")
let resetBtn = document.getElementById("resetBtn")

let startTime = 0;
let stopTime = true;
let currentTime = 0;
let passedTime = 0;
let intervalid;
let hrs = 0;
let mins= 0;
let secs = 0;

startBtn.addEventListener("click", () => {
    if(stopTime){
        stopTime = false;
        startTime = Date.now() - passedTime;
        intervalid = setInterval(updateTime, 1000);
    }
});
stopBtn.addEventListener("click", () => {
    if(!stopTime){
        stopTime = true;
        passedTime = Date.now() - startTime;
        clearInterval(intervalid);
    }
});
resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalid);
    startTime = 0;
    currentTime = 0;
    passedTime = 0;
    hrs = 0;
    mins= 0;
    secs = 0;
    display.textContent = "00:00:00"
});

function updateTime(){
    passedTime = Date.now() - startTime;

    secs = Math.floor((passedTime / 1000) % 60);
    mins = Math.floor((passedTime / (1000 * 60)) % 60);
    hrs = Math.floor((passedTime / (1000 * 60 * 60)) % 60);

    secs = zero(secs);
    mins = zero(mins);
    hrs = zero(hrs);

    display.textContent = `${hrs}:${mins}:${secs}`;

    function zero(unit){
        return (("0") + unit).length > 2 ? unit : "0" + unit
    }
}


