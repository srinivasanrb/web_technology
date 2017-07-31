var iter = 0;


function incrementIteration() {
  iter++;
  postMessage(iter);
  document.getElementById("uiText").innerHTML = iter;
  scheduleIncrement();
}

function scheduleIncrement() {
  setTimeout(incrementIteration, 1000);
}

scheduleIncrement();