const timeLeftDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const StartPauseButton = document.querySelector("#start-pause-button");
const squares = document.querySelectorAll(".grid div");

console.log(squares);
function moveFrog() {
  console.log("moved");
}

document.addEventListener("keyup", moveFrog);
