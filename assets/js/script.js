// app.js
let timerDisplay = document.getElementById("timer");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");

let countdown;
let workDuration = 25 * 60; // 25 minutes in seconds
let breakDuration = 5 * 60; // 5 minutes in seconds
let isWorking = true;

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);

function startTimer() {
    clearInterval(countdown);
    let endTime = Date.now() + (isWorking ? workDuration : breakDuration) * 1000;
    countdown = setInterval(() => {
        let secondsLeft = Math.round((endTime - Date.now()) / 1000);

        if (secondsLeft < 0) {
            clearInterval(countdown);
            isWorking = !isWorking;
            startTimer();
            return;
        }
        timerDisplay.textContent = formatTime(secondsLeft);
    }, 1000);
}

function stopTimer() {
    clearInterval(countdown);
    timerDisplay.textContent = isWorking ? formatTime(workDuration) : formatTime(breakDuration);
}

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}
