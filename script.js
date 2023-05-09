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
    //if player wins return 0
    return 0;
  } else {
    console.log("You Lose! ", cSelection, " beats ", pSelection);
    //if player loses return 1
    return 1;
  }
}

function game() {
  //initialize score
  let playerScore = 0;
  let computerScore = 0;

  //play round
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt();
    const computerChoice = getComputerChoice();
    let roundRes = playRound(playerSelection, computerChoice);
    if (roundRes == 0) {
      playerScore++;
    } else if (roundRes == 1) {
      computerScore++;
    }
  }

  console.log("Player: ", playerScore, "\tComputer: ", computerScore);
}

//call function

game();
