import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dataForm = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
// const look = document.querySelector('.timer');
// const lookSign = document.querySelectorAll('.field');

// look.style.display = 'flex';
// look.style.flexDirection = 'row';
// // look.style.columnGap = '12px';
// look.style.fontSize = '20px';

let deltaTime = 0;
let timerId = null;
let formatDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(startTime) {
    console.log(startTime[0]);
    timerStart(startTime[0]);
  },
};

buttonStart.setAttribute('disabled', true);

flatpickr(dataForm, options);

window.addEventListener('keydown', e => {
  if (e.code === 'Escape' && timerId) {
    clearInterval(timerId);

    dataForm.removeAttribute('disabled');
    buttonStart.setAttribute('disabled', true);
  }
});

buttonStart.addEventListener('click', onStart);

function onStart() {
  timerId = setInterval(startTimer, 1000);
}

function timerStart(startTime) {
  const currentTime = Date.now();
  if (currentTime >= startTime) {
    return Notify.failure('Please choose a date in the future');
  }
  deltaTime = startTime.getTime() - currentTime;
  formatDate = convertMs(deltaTime);

  renderDate(formatDate);
  buttonStart.removeAttribute('disabled');
}

function startTimer() {
  buttonStart.setAttribute('disabled', true);
  dataForm.setAttribute('disabled', true);

  deltaTime -= 1000;

  if (dataSeconds.textContent <= 0 && dataMinutes.textContent <= 0) {
    Notify.success('Time end');
    clearInterval(timerId);
  } else {
    formatDate = convertMs(deltaTime);
    renderDate(formatDate);
  }
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function updateClockface({ days, hours, minutes, seconds }) {
  timerClock.textContent = `${days}:${hours}:${minutes}:${seconds}`;
}
function renderDate(formatDate) {
  dataSeconds.textContent = String(formatDate.seconds).padStart(2, '0');
  dataMinutes.textContent = String(formatDate.minutes).padStart(2, '0');
  dataHours.textContent = String(formatDate.hours).padStart(2, '0');
  dataDays.textContent = String(formatDate.days).padStart(2, '0');
}
