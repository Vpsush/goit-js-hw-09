!function(){document.querySelector("#datetime-picker");var e=document.querySelector("[data-start]");document.querySelector("[data-days]"),document.querySelector("[data-hours]"),document.querySelector("[data-minutes]"),document.querySelector("[data-seconds]"),new Date;e.addEventListener("click",onStart),t=Date.now(),setInterval((function(){var e,o,a,r,n=Date.now(),c=(e=n-t,o=Math.floor(e%864e5/36e5),a=Math.floor(e%144e4/6e4),r=Math.floor(e%24e3/1e3),{hours:o,mins:a,secs:r});console.log(c)}),1e3);var t}();
//# sourceMappingURL=02-timer.19c4c043.js.map
