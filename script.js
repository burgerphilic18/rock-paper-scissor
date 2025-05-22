function getRandomInt(max) {
  return (Math.floor(Math.random() * max));
}

function getComputerChoice(){
    switch (getRandomInt(2)){
        case 0 : return "rock";
        case 1 : return "paper";
        case 2 : return "scissors";
    }
}

function getHumanChoice(){
    return (prompt("Enter Your Choice (Rock, Paper, Scissors)").toLowerCase());
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if ((humanChoice === "rock") && (computerChoice === "rock")){
        console.log("Tie");
    }
    if ((humanChoice === "paper") && (computerChoice === "paper")){
        console.log("Tie");
    }
    if ((humanChoice === "scissors") && (computerChoice === "scissors")){
        console.log("Tie");
    }
    if ((humanChoice === "rock") && (computerChoice === "scissors")){
        console.log("You Win!");
        humanScore++;
    }
    if ((humanChoice === "rock") && (computerChoice === "paper")){
        console.log("Computer Wins!");
        computerScore++;
    }
    if ((humanChoice === "paper") && (computerChoice === "rock")){
        console.log("You Win!");
        humanScore++;
    }
    if ((humanChoice === "paper") && (computerChoice === "scissors")){
        console.log("Computer Wins!");
        computerScore++;
    }
    if ((humanChoice === "scissors") && (computerChoice === "paper")){
        console.log("You Win!");
        humanScore++;
    }
    if ((humanChoice === "scissors") && (computerChoice === "rock")){
        console.log("Computer Wins!");
        computerScore++;
    }
}

function playGame(){
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    if (computerScore > humanScore){
        console.log("Score is", computerScore,":",humanScore,"\nComputer wins the game!")
    } else{
        console.log("Score is", humanScore,":",computerScore,"\nYou win the game!")
    }
}

playGame()