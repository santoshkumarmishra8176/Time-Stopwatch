// Timer
let timerInterval;
let timerSeconds = 0;
let timerMinutes = 0;
let timerHours = 0;

function startTimer() {
  timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerSeconds = 0;
  timerMinutes = 0;
  timerHours = 0;
  document.getElementById("timer").textContent = formatTime(timerHours) + ":" + formatTime(timerMinutes) + ":" + formatTime(timerSeconds);
}

function updateTimer() {
  timerSeconds++;
  if (timerSeconds >= 60) {
    timerSeconds = 0;
    timerMinutes++;
    if (timerMinutes >= 60) {
      timerMinutes = 0;
      timerHours++;
    }
  }
  document.getElementById("timer").textContent = formatTime(timerHours) + ":" + formatTime(timerMinutes) + ":" + formatTime(timerSeconds);
}

// Stopwatch
let stopwatchInterval;
let stopwatchSeconds = 0;
let stopwatchMinutes = 0;
let stopwatchHours = 0;

function startStopwatch() {
  stopwatchInterval = setInterval(updateStopwatch, 1000);
}

function stopStopwatch() {
  clearInterval(stopwatchInterval);
}

function resetStopwatch() {
  clearInterval(stopwatchInterval);
  stopwatchSeconds = 0;
  stopwatchMinutes = 0;
  stopwatchHours = 0;
  document.getElementById("stopwatch").textContent = formatTime(stopwatchHours) + ":" + formatTime(stopwatchMinutes) + ":" + formatTime(stopwatchSeconds);
}

function updateStopwatch() {
  stopwatchSeconds++;
  if (stopwatchSeconds >= 60) {
    stopwatchSeconds = 0;
    stopwatchMinutes++;
    if (stopwatchMinutes >= 60) {
      stopwatchMinutes = 0;
      stopwatchHours++;
    }
  }
  document.getElementById("stopwatch").textContent = formatTime(stopwatchHours) + ":" + formatTime(stopwatchMinutes) + ":" + formatTime(stopwatchSeconds);
}

// Utility function to format time with leading zeros
function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
