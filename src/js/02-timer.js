// import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const dataForm = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');
const timerClock = document.querySelector('.timer');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

buttonStart.addEventListener('click', () => {
  timer.start();
});

// function onStart() {
//   timerId = setInterval(startTimer, 1000);
// }
const timer = {
  intervalId: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    const startTime = Date.now();
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = convertMs(deltaTime);
      updateClockface(time);
      dataDays.textContent = padDays(`${days}`);
      dataHours.textContent = pad(`${hours}`);
      dataMinutes.textContent = pad(`${minutes}`);
      dataSeconds.textContent = pad(`${seconds}`);
    }, 1000);
  },
};

function pad(value) {
  return String(value).padStart(2, '0');
}
function padDays(value) {
  return String(value).padStart(3, '0');
}

// function getTimeComponents(time) {
//   const days = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24))
//   );
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 24)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 24)) / 1000));
//   return { days, hours, mins, secs };
// }
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

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

function updateClockface({ days, hours, minutes, seconds }) {
  timerClock.textContent = `${days}:${hours}:${minutes}:${seconds}`;
}
