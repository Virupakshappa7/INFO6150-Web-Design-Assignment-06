var minute = 0;
var second = 0;
var millisec = 0;

var minHeading = document.getElementById("minute");
var secHeading = document.getElementById("second");
var msecHeading = document.getElementById("millisec");

var interval;





function timer() {
    millisec++;
    msecHeading.innerHTML = millisec;
    if(millisec >= 100) {
        second++;
        secHeading.innerHTML = second;
        millisec = 0;
    }
    else if(second >= 60) {
        minute++;
        minHeading.innerHTML = minute;
        second = 0;
    }
}


async function start() {
    interval = setInterval(timer, 10);
    await disableStartBtn();
}

function stop() {
    clearInterval(interval);
    enableStartBtn();
}

function reset() {
    minute = 0;
    second = 0;
    millisec = 0;
    minHeading.innerHTML = minute;
    secHeading.innerHTML = second;
    msecHeading.innerHTML = millisec;
    stop();
}

function disableStartBtn() {
    return new Promise(resolve => {
        setTimeout(() => {
          resolve(document.getElementById("startBtn").disabled = true) ;
        }, 0);
      });

}

function enableStartBtn() {
    document.getElementById("startBtn").disabled = false;
}