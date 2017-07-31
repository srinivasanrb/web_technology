var uiEle = document.getElementById("uiText");

var worker = new Worker("./worker.js");

worker.postMessage();

worker.onMessage = function(e) {
  uiEle.innerHTML = "Iteration: " + e;
}