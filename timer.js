const timerElement = document.getElementById("timer-1");
const daysElement = document.querySelector('[data-value="days"]');
const hoursElement = document.querySelector('[data-value="hours"]');
const minsElement = document.querySelector('[data-value="mins"]');
const secsElement = document.querySelector('[data-value="secs"]');
const startButton = document.getElementById("start-timer");
const userDate = document.querySelector(".user-date");
const chooseBtn = document.querySelector(".choose-button");
let interval;
let targetDate;

function getMlsFromInput() {
  chooseBtn.addEventListener("click", () => {
    const getUserDate = userDate.value;
    targetDate = new Date(getUserDate);
    const milliseconds = targetDate.getTime();
    console.log(milliseconds);
  });
}

function updateTimer() {
  const now = new Date();
  const time = targetDate - now;

  if (time <= 0) {
    daysElement.textContent = "0";
    hoursElement.textContent = "00";
    minsElement.textContent = "00";
    secsElement.textContent = "00";
    clearInterval(interval);
    return;
  }

  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 60)) / 1000);

  daysElement.textContent = days;
  hoursElement.textContent = hours.toString().padStart(2, "0");
  minsElement.textContent = mins.toString().padStart(2, "0");
  secsElement.textContent = secs.toString().padStart(2, "0");
}

function startTimer() {
  if (interval) return;
  updateTimer();
  interval = setInterval(updateTimer, 1000);
}

getMlsFromInput();
startButton.addEventListener("click", startTimer);
