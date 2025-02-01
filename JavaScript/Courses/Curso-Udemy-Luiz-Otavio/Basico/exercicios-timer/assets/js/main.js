let interval;
let secondsTime = 0;

const timerElement = document.querySelector(".timer");
const startElement = document.querySelector(".start");
const pauseElement = document.querySelector(".pause");
const stopElement = document.querySelector(".stop");


// Abaixo é a solução que eu fiz

/*startElement.addEventListener("click", startTime);
pauseElement.addEventListener("click", pauseTime);
stopElement.addEventListener("click", stopTime);

function startTime(){
    timerElement.classList.remove("timer-paused");
    interval = setInterval(incrementTime, 1000);
}

function incrementTime(){
    secondsTime++;

    timerElement.innerText = `${returnHours(secondsTime)} : ${returnMinutes(secondsTime)} : ${returnSeconds(secondsTime)}`;
}

function returnHours(seconds){
    return addZeroLeft(Math.floor((seconds / 60) / 60));
}

function returnMinutes(seconds){
    return addZeroLeft(Math.floor(seconds / 60));
}

function returnSeconds(seconds){
    const minutes = Math.floor((seconds / 60));
    return addZeroLeft(seconds - (minutes * 60));
}

function addZeroLeft(number){
    return number >= 10 ? number : `0${number}`;
}

function pauseTime(){
    timerElement.classList.add("timer-paused");

    clearInterval(interval);
}

function stopTime(){
    if (interval) {
        clearInterval(interval);
        secondsTime = 0;
        timerElement.innerText = "00 : 00 : 00";
        timerElement.classList.remove("timer-paused");
    }
}
*/

// Esta é a solução do professor

document.addEventListener("click", function(e) {
    const element = e.target;

    if (element.classList.contains("start")) {
        startTime();
    } else if (element.classList.contains("pause")) {
        pauseTime();
    } else if (element.classList.contains("stop")) {
        stopTime();
    }
});

function startTime(){
    clearInterval(interval);
    timerElement.classList.remove("timer-paused");
    interval = setInterval(incrementTime, 1000);
}

function incrementTime(){
    secondsTime++;
    timerElement.innerText = createDateFromSeconds(secondsTime);
}

function createDateFromSeconds(seconds){
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString("pt-BR", {
        hour12: false,
        timeZone: "UTC"
    });
}

function pauseTime(){
    timerElement.classList.add("timer-paused");

    clearInterval(interval);
}

function stopTime(){
    if (interval) {
        clearInterval(interval);
        secondsTime = 0;
        timerElement.innerText = "00:00:00";
        timerElement.classList.remove("timer-paused");
    }
}
