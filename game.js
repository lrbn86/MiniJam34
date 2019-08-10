var maxResource = 999;
var resource = 1;
const resourceDisplay = document.querySelector("#resourceDisplay");

const bg = document.querySelector("#container");

const updateScore = function() {
  var inv = setInterval(function() {
    if (resource < maxResource) {
      resourceDisplay.textContent = resource++;
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

updateScore();
addEventListener('keypress', keyPresses);