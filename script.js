// Get the buttons
var rockBtn = document.querySelector("#rock");
var paperBtn = document.querySelector("#paper");
var scissorsBtn = document.querySelector("#scissors");

// Add event listeners to the buttons
rockBtn.addEventListener("click", function() {
  selectChoice(0);
});

paperBtn.addEventListener("click", function() {
  selectChoice(1);
});

scissorsBtn.addEventListener("click", function() {
  selectChoice(2);
});

function selectChoice(playerChoice) {
  var choices = ["rock", "paper", "scissors"];
  var computerChoice = Math.floor(Math.random() * 3);
  
  var result = playRound(playerChoice, computerChoice);
  
  document.querySelector("#result").textContent = result;
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === 0 && computerChoice === 2) ||
    (playerChoice === 1 && computerChoice === 0) ||
    (playerChoice === 2 && computerChoice === 1)
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}
