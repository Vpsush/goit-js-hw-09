import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const dataForm = document.querySelector('#datetime-picker');
const buttonStart = document.querySelector('[data-start]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
