
var hour = 0;
var min = 0;
var sec = 0;
var ms = 0;

var interval;

function timer(){
    ms++;
    document.getElementById("milisec").innerHTML = ms;
    if(ms == 100) {
        sec++;
        document.getElementById("second").innerHTML = sec;
        ms = 0;
        if(sec == 60) {
            min++;
            document.getElementById("minute").innerHTML = min;
            sec = 0;
            ms = 0;
        }
        if(min == 60) {
            hour++;
            document.getElementById("hour").innerHTML = hour;
            ms = 0;
            sec = 0;
            min = 0;
        }
    }
}
function start() {
    interval = setInterval(timer,10);
}
function stop() {
    clearInterval(interval);
    document.getElementById(btn.id).disabled = false;
}
function reset() {
    ms = 0;
    sec = 0;
    min = 0;
    hour = 0;
    document.getElementById("milisec").innerHTML = ms;
    document.getElementById("second").innerHTML = sec;
    document.getElementById("minute").innerHTML = min;
    document.getElementById("hour").innerHTML = hour;
}

function disableButton(btn){
				document.getElementById(btn.id).disabled = true;
			}