var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
  var choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function updateScore() {
  document.getElementById('score').textContent = "You: " + humanScore + " | Computer: " + computerScore;
}

function playRound(humanChoice) {
  var computerChoice = getComputerChoice();
  var result = "";
  if (humanChoice === computerChoice) {
    result = "Both chose " + humanChoice + ". It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    result = "You Win! " + humanChoice + " beats " + computerChoice + ".";
  } else {
    computerScore++;
    result = "Computer Wins! " + computerChoice + " beats " + humanChoice + ".";
  }
  document.getElementById('result').textContent = result;
  updateScore();
  if (humanScore === 5 || computerScore === 5) {
    document.getElementById('result').textContent += " Game Over!";
    document.getElementById('rockBtn').disabled = true;
    document.getElementById('paperBtn').disabled = true;
    document.getElementById('scissorsBtn').disabled = true;
  }
}

document.getElementById('rockBtn').onclick = function() { playRound("rock"); };
document.getElementById('paperBtn').onclick = function() { playRound("paper"); };
document.getElementById('scissorsBtn').onclick = function() { playRound("scissors"); };

updateScore();