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

  //change the div
  const results = document.getElementById("results");

  //determine winner

  if (pSelection === cSelection) {
    console.log("It is a draw");
    results.innerHTML = "It is a draw!";
  } else if (
    (pSelection === "rock" && cSelection === "scissors") ||
    (pSelection === "paper" && cSelection === "rock") ||
    (pSelection === "scissors" && cSelection === "paper")
  ) {
    console.log("You WIN! ", pSelection, " beats ", cSelection);
    results.innerHTML = `You WIN! ${pSelection} beats ${cSelection}`;
    //if player wins return 0
    return 0;
  } else {
    console.log("You Lose! ", cSelection, " beats ", pSelection);
    results.innerHTML = `You Lose! ${cSelection} beats ${pSelection}`;
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

  const paperBtn = document.querySelector("#paperBtn");
  const scissorsBtn = document.querySelector("#scissorsBtn");
  const rockBtn = document.querySelector("#rockBtn");
  const score = document.getElementById("score");

  function getRoundWinnerAndScore(pSelection) {
    let roundRes = playRound(pSelection, getComputerChoice());
    if (roundRes == 0) {
      playerScore++;
    } else if (roundRes == 1) {
      computerScore++;
    }
    console.log("Player: ", playerScore, "\tComputer: ", computerScore);
    score.innerHTML = `Player: ${playerScore}\t Computer: ${computerScore}`;

    if (playerScore > 4 || computerScore > 4) {
      console.log("The game is over!");

      if (playerScore > 4) {
        console.log("Congradulations! You WON the game!");
        results.innerHTML = `Congradulations! You WON the game!`;
      } else {
        console.log("You LOST the game! Better luck next time!");
        results.innerHTML = `You LOST the game! Better luck next time!`;
      }
      //set scores to 0
      playerScore = 0;
      computerScore = 0;
      score.innerHTML = `Player: ${playerScore}\t Computer: ${computerScore}`;
    }
  }

  rockBtn.addEventListener("click", function () {
    getRoundWinnerAndScore("rock");
  });
  scissorsBtn.addEventListener("click", function () {
    getRoundWinnerAndScore("scissors");
  });
  paperBtn.addEventListener("click", function () {
    getRoundWinnerAndScore("paper");
  });
}

//call main function

playGame();
