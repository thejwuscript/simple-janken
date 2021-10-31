function computerPlay() {

  let num1 = Math.random();

  if (num1 <= 0.34) {
    return "ROCK";
  } else if (num1 <= 0.67) {
    return "PAPER";
  } else return "SCISSORS";

}


let num2;
let roundcount = 1;
let playerscore = 0;
let compscore = 0;

function tryagain() {
  alert("Invalid entry. Check your spelling and try again.")
  roundcount--;
  num2 = 0;
}

function playRound(e) { 
  
  let playerSelection = e.target.className;
  let computerSelection = computerPlay();
  let div1 = document.querySelector("div.display-results");
  
  

   switch (playerSelection.concat(computerSelection)) {
    case "ROCKROCK":
      div1.textContent = "Computer played rock. It's a tie!";
      div1.style.cssText = "vertical-align: middle; line-height: 50px";
      break;
    case "PAPERPAPER":
      div1.textContent = "Computer played paper. It's a tie!";
      div1.style.cssText = "vertical-align: middle; line-height: 50px";
      break;
    case "SCISSORSSCISSORS":
      div1.textContent = "Computer played scissors. It's a tie!";
      div1.style.cssText = "vertical-align: middle; line-height: 50px";
      break;
    case "ROCKSCISSORS":
      div1.textContent = "Computer played scissors. You win this round!";
      div1.style.cssText = "vertical-align: middle; line-height: 50px";
      playerscore ++;
      break;
    case "PAPERROCK":
      div1.textContent = "Computer played rock. You win this round!";
      div1.style.cssText = "vertical-align: middle; line-height: 50px";
      playerscore ++;
      break;
    case "SCISSORSPAPER":
      div1.textContent = "Computer played paper. You win this round!";
      div1.style.cssText = "vertical-align: middle; line-height: 50px";
      playerscore ++;
      break;
    case "ROCKPAPER":
      div1.textContent = "Computer played paper. Oh no.";
      div1.style.cssText = "vertical-align: middle; line-height: 50px";
      compscore ++;
      break;
    case "PAPERSCISSORS":
      div1.textContent = "Computer played scissors. Oh no.";
      div1.style.cssText = "vertical-align: middle; line-height: 50px";
      compscore ++;
      break;
    case "SCISSORSROCK":
      div1.textContent = "Computer played rock. Oh no.";
      div1.style.cssText = "vertical-align: middle; line-height: 50px";
      compscore ++;
      break;

  }

  div2.textContent = playerscore + "     " + compscore;

  if (playerscore == 5) {
    div3.textContent = "Congratulations! You won the game!";
  } else if (compscore == 5) {
    div3.textContent = "Oh no. You lost the game :-(";
  }
  

  }


const btn = document.querySelectorAll("button");
const div2 = document.querySelector("div.display-score");
const div3 = document.querySelector("div.winner");


btn.forEach( function(elem) {
  elem.addEventListener("click", playRound);
});
