function computerPlay() {

  let num1 = Math.random();

  if (num1 <= 0.34) {
    return "ROCK";
  } else if (num1 <= 0.67) {
    return "PAPER";
  } else return "SCISSORS";

}

let computerSelection = computerPlay();
let playerSelection;
let num2;
let roundcount = 1;
let playerscore = 0;
let compscore = 0;

function tryagain() {
  alert("Invalid entry. Check your spelling and try again.")
  roundcount--;
  num2 = 0;
}

function playRound(playerSelection, computerSelection) { 
  
  do {
    initalplay = prompt(`Round ${roundcount++}.  Rock, Paper or Scissors?`, "");
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
      alert("Computer played scissors. You win this round!");
      playerscore += 2;
      break;
    case "PAPERROCK":
      alert("Computer played rock. You win this round!");
      playerscore += 2;
      break;
    case "SCISSORSPAPER":
      alert("Computer played paper. You win this round!");
      playerscore += 2;
      break;
    case "ROCKPAPER":
      alert("Computer played paper. Oh no.");
      compscore += 2;
      break;
    case "PAPERSCISSORS":
      alert("Computer played scissors. Oh no.");
      compscore += 2;
      break;
    case "SCISSORSROCK":
      alert("Computer played rock. Oh no.");
      compscore += 2;
      break;

  }
}

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

alert("Let's play Janken!\nThere are 5 rounds against the computer.");
alert("Rules:\nWin - 2 points\nTie - 1 point\nLose - 0 points")
alert("Points will be tallied after 5 rounds.\nGame START!")

game();

alert(`Game END.\nYour score is ${playerscore}.\nComputer's score is ${compscore}.`)

if (playerscore > compscore) {
  alert("Congratulations! You won the game!");  
} else if (playerscore < compscore) {
  alert("You lost the game.");
} else if (playerscore == compscore) {
  alert("Wow! It's a draw! Tiebreaker round!");
  do {
    computerPlay();
    playRound(playerSelection, computerSelection);
  }
  while (playerscore == compscore);
  if (playerscore > compscore) {
    alert("Tie broken! You've won the game!")
  } else if (playerscore < compscore) {
    alert("Oh no, so close! You've lost the game : (");
  }
}


