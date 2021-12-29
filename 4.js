let timeElapsed = 0;
let myTimer = 0;
let isTimerStarted = false;

function clockRefresh() {
  document.getElementById("time").innerText = `${Math.floor(timeElapsed / 60)} : ${timeElapsed % 60}`;
}

function tick(){
  timeElapsed += 1;
  clockRefresh();
}

function start() {
  if(isTimerStarted) return;
  myTimer = setInterval(tick, 100);
  isTimerStarted = true;
}

function stop() {
  if(!isTimerStarted) return;
  clearInterval(myTimer);
  isTimerStarted = false;
}

function reset() {
  timeElapsed = 0;
  stop();
  clockRefresh();
}

clockRefresh();
