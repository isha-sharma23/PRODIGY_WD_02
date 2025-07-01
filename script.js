let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("display");
let timer = null;
let isRunning = false;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  display.innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function startStop() {
  if (!isRunning) {
    timer = setInterval(stopwatch, 1000);
    isRunning = true;
    document.querySelector(".buttons button:first-child").innerText = "Pause";
  } else {
    clearInterval(timer);
    isRunning = false;
    document.querySelector(".buttons button:first-child").innerText = "Start";
  }
}

function reset() {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  isRunning = false;
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
  document.querySelector(".buttons button:first-child").innerText = "Start";
}

function lap() {
  if (isRunning) {
    const lapTime = display.innerText;
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap: ${lapTime}`;
    document.getElementById("laps").appendChild(lapItem);
  }
}
