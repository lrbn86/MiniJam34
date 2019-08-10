var maxResource = 999;
var resource = 1;
const resourceDisplay = document.querySelector("#resourceDisplay");

const bg = document.querySelector("#container");

const updateScore = function() {
  var inv = setInterval(function() {
    if (resource <= maxResource) {
      resource++;
      resourceDisplay.textContent = resource;
      document.title = resource;
    } else {
      clearInterval(inv);
    }

  }, 30000 / 100);
}

const keyPresses = function (ev) {
  let key = ev.key;

  if (key == "z") { 
  } else if (key == "x") {
    bg.style.backgroundColor = "green";
  }
}


// Apparently if the user switches tab, the interval time will be slower in inactive window than to active window.
updateScore();
addEventListener('keypress', keyPresses);