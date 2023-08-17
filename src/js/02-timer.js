// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';

const dataForm = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

buttonStart.addEventListener('click', onStart);

function onStart() {
  timerId = setInterval(startTimer, 1000);
}
const timer = {
  start() {
    const startTime = Date.now();

    setInterval(() => {
      const curetnTime = Date.now();
      const deltaTime = curetnTime - startTime;
      const timeComponents = getTimeComponents(deltaTime);
      console.log(timeComponents);
    }, 1000);
  },
};
timer.start();

function getTimeComponents(time) {
  const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((time % (1000 * 60 * 24)) / (1000 * 60));
  const secs = Math.floor((time % (1000 * 24)) / 1000);
  return { hours, mins, secs };
}

function updateClockface({ hours, mins, secs }) {
  dataForm.clo;
}
