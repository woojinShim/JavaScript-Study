const computerChoiceDisplay = document.getElementById("computer-chice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoice = document.querySelectorAll("button");
let userChoice;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", () => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
  })
);
