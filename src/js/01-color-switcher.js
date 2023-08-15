const buttonStart = document.querySelector('[data - start]');
const buttonStop = document.querySelector('[data - stop]');
const bodyAll = document.querySelector('body');
let timerId = null;

buttonStart.addEventListener('click', onStart);
buttonStop.addEventListener('click', onStop);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onStart() {
  timerId = setInterval(changeColor, 1000);
  buttonStart.toggleAttribute('disabled');
}

function onStop() {
  clearInterval(timerId);
  buttonStart.remove('disabled');
}

function changeColor() {
  bodyAll.style.backgroundColor = getRandomHexColor();
}
