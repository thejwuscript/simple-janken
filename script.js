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

let computerSelection = computerPlay();

// Get the player's input via prompt and store it in a variable.
// Capitalize all letters in the string and remove whitespace. Store it in a new variable.
// If the variable is equal to "ROCK" or "PAPER" or "SCISSORS" then move on to the next step.
// Else, show prompt "Invalid entry, try again." and ask for the player's input again.
// keep looping until the playerSelection is equal to "ROCK" or "PAPER" or SCISSORS"

let initalplay
let playerSelection
let num2

function tryagain() {
  alert("Invalid entry. Check your spelling and try again.")
  num2 = 0;
}

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

// I could have made each case unique, for example if I wanted to display what the computer played,
// but for simplicity sake I have grouped the cases to output the same results as below.

function playRound(playerSelection, computerSelection)  
  switch (playerSelection.concat(computerSelection)) {
    case "ROCKROCK":
    case "PAPERPAPER":
    case "SCISSORSSCISSORS":
      alert("It's a tie!");
      return 1;
    // break
    case "ROCKSCISSORS":
    case "PAPERROCK":
    case "SCISSORSPAPER":
      alert("You win!");
      return 2;
    // break
    case "ROCKPAPER":
    case "PAPERSCISSORS":
    case "SCISSORSROCK":
      alert("You lose.");
      return 0;
    // break

  }
   

