//Randomly generate a number between 0 and 1.
//Divide the range between 0 and 1 into three equal parts. Therefore, the "breakpoints" are 0.34 and 0.67.
//Assign each part to "ROCK" or "PAPER" or "SCISSORS"
//Keep all letters capitalized for the sake of consistency with the player's input.

function computerPlay() {

  let num1 = Math.random();

  if (num1 <= 0.34) {
    return "ROCK";
  } else if (num1 <= 0.67) {
    return "PAPER";
  } else return "SCISSORS";

}




// Get the player's input via prompt and store it in a variable.
// Capitalize all letters in the string and remove whitespace. Store it in a new variable.
// If the variable is equal to "ROCK" or "PAPER" or "SCISSORS" then move on to the next step.
// Else, show prompt "Invalid entry, try again." and ask for the player's input again.
// keep looping until the playerSelection is equal to "ROCK" or "PAPER" or SCISSORS"

// let playerSelection --> no need to create this variable
let computerSelection = computerPlay();
let playerSelection
let num2

// create two variables name playerscore and compscore. Number data type. Give them initial values of 0.
let playerscore = 0;
let compscore = 0;

function tryagain() {
  alert("Invalid entry. Check your spelling and try again.")
  num2 = 0;
}

// do {
 // initalplay = prompt("What's your play? Rock, paper or scissors?", "");
//  playerSelection = initalplay.toUpperCase().trim();
//  if (playerSelection == "ROCK") {
//  num2 = 1
//  } else if (playerSelection == "PAPER") {
//  num2 = 1 
//  } else if (playerSelection == "SCISSORS") {
//  num2 = 1
//  } else tryagain();
//} while (num2 == 0);

// I could have made each case unique, for example if I wanted to display what the computer played,
// but for simplicity sake I have grouped the cases to output the same results as below.
// Edit: Ended up making each case unique for better understanding of the result from the user's side.
// Edit #2: I did not need to specify parameters for this function. In fact, if had the parameter
// "computerSelection" and I did not provide an argument when the function is called, "computerSelection"
// would return undefined. Parameters are included here for the sake of following the instructions per TOP

function playRound(playerSelection, computerSelection) { 
  
  do {
    initalplay = prompt("What's your play? Rock, paper or scissors?", "");
    playerSelection = initalplay.toUpperCase().trim();
    if (playerSelection == "ROCK") {
    num2 = 1
    } else if (playerSelection == "PAPER") {
    num2 = 1 
    } else if (playerSelection == "SCISSORS") {
    num2 = 1
    } else tryagain();
  } while (num2 == 0);

   switch (playerSelection.concat(computerSelection)) {
    case "ROCKROCK":
      alert("Computer played rock. It's a tie!");
      ++playerscore;
      ++compscore;
      break;
    case "PAPERPAPER":
      alert("Computer played paper. It's a tie!");
      ++playerscore;
      ++compscore;
      break;
    case "SCISSORSSCISSORS":
      alert("Computer played scissors. It's a tie!");
      ++playerscore;
      ++compscore;
       break;
    case "ROCKSCISSORS":
      alert("Computer played scissors. You win!");
      playerscore += 2;
      break;
    case "PAPERROCK":
      alert("Computer played rock. You win!");
      playerscore += 2;
      break;
    case "SCISSORSPAPER":
      alert("Computer played paper. You win!");
      playerscore += 2;
      break;
    case "ROCKPAPER":
      alert("Computer played paper. You lose.");
      compscore += 2;
      break;
    case "PAPERSCISSORS":
      alert("Computer played scissors. You lose.");
      compscore += 2;
      break;
    case "SCISSORSROCK":
      alert("Computer played rock. You lose.");
      compscore += 2;
      break;

  }
}


//Write a NEW function called game(). Use the previous function inside of this one to play
// a 5 round game that keeps score and reports a winner or loser at the end.
//Hint: call your playRound function 5 times in a row
function game() {
  playRound(playerSelection, computerSelection);
  computerPlay();
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  computerPlay();
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  computerPlay();
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  computerPlay();
  computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
}

alert("Let's play Janken! There will be 5 rounds.");

game();

alert(`Game end. Your score is ${playerscore}. Computer's score is ${compscore}.`)

if (playerscore > compscore) {
  alert("Congratulations! You won the game!");  
} else if (playerscore < compscore) {
  alert("You lost the game.");
} else alert("Wow! It's a draw!");