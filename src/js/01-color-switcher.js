const buttonStart = document.querySelector('[data-start]');
const buttonStop = document.querySelector('[data-stop]');
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
  // buttonStart.toggleAttribute('disabled');
  buttonStart.disabled = true;
  buttonStop.disabled = false;
}

function onStop() {
  clearInterval(timerId);
  // buttonStop.removeAttribute('disabled');
  buttonStart.disabled = false;
  buttonStop.disabled = true;
}

function changeColor() {
  bodyAll.style.backgroundColor = getRandomHexColor();
}
