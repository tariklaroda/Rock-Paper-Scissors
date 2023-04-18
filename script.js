function getComputerChoice() {
  //make array with Rock Paper Scissors
  const computerChoice = ["rock", "paper", "scissors"];
  console.log(computerChoice);

  //generate random number between 0,1,2

  let rand = Math.floor(Math.random() * 3);
  console.log(rand);

  let choice = computerChoice[rand];
  console.log(choice);
  //return element from array
  return choice;
}

function playRound(playerSelection, computerSelection) {
  //get selection from player

  const pSelection = playerSelection.toLowerCase();
  //initialize computer selection
  const cSelection = computerSelection;

  //determine winner

  if (pSelection === cSelection) {
    console.log("It is a draw");
  } else if (
    (pSelection === "rock" && cSelection === "scissors") ||
    (pSelection === "paper" && cSelection === "rock") ||
    (pSelection === "scissors" && cSelection === "paper")
  ) {
    console.log("You WIN! ", pSelection, " beats ", cSelection);
  } else {
    console.log("You Lose! ", cSelection, " beats ", pSelection);
  }
}

function game()

//call function

const playerSelection = "rock";
const computerChoice = getComputerChoice();

playRound(playerSelection, computerChoice);
