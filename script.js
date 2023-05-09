/**
 * This function generates a random choice: rock, paper or scissors
 * @returns a string representing the choice of the computer
 */
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

/**
 * This function plays a single round of Rock-Paper-Scissors
 * and
 * @param {} playerSelection is the choice made by the player
 * @param {*} computerSelection is the choice made by the computer
 * @returns 0 or 1, indicating if the player won or lost
 */
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

/**
 * This Function plays multiple rounds of Rock-paper-Scissors
 * and shows the final score at the end
 */
function playGame() {
  //initialize score and amount of rounds
  const NUM_ROUNDS = 5;
  let playerScore = 0;
  let computerScore = 0;

  //play round
  for (let i = 0; i < NUM_ROUNDS; i++) {
    //get selection
    const playerSelection = prompt();
    const computerChoice = getComputerChoice();

    // play round
    let roundRes = playRound(playerSelection, computerChoice);
    if (roundRes == 0) {
      playerScore++;
    } else if (roundRes == 1) {
      computerScore++;
    }
  }

  //display results
  console.log("Player: ", playerScore, "\tComputer: ", computerScore);
}

//call main function

playGame();
