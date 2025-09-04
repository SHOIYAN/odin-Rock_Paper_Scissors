let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const compChoice = Math.floor(Math.random() * 3) + 1;
  if (compChoice === 1) return "Rock";
  if (compChoice === 2) return "Paper";
  return "Scissors";
}

function playRound(humanChoice, computerChoice) {
  if (computerChoice === humanChoice) {
    return "It's a Tie!";
  }
  // Computer wins
  if (computerChoice === "Rock" && humanChoice === "Scissors") {
    computerScore++;
    return "You lose! Rock beats Scissors";
  }
  if (computerChoice === "Scissors" && humanChoice === "Paper") {
    computerScore++;
    return "You lose! Scissors beats Paper";
  }
  if (computerChoice === "Paper" && humanChoice === "Rock") {
    computerScore++;
    return "You lose! Paper beats Rock";
  }
  // Human wins
  humanScore++;
  return `You win! ${humanChoice} beats ${computerChoice}`;
}

function playGame() {
  const finalResult = document.createElement("p");
  if (humanScore > computerScore) {
    finalResult.textContent = `🎉 You Win the Game! Final: ${humanScore} - ${computerScore}`;
  } else if (humanScore < computerScore) {
    finalResult.textContent = `😢 You Lose the Game. Final: ${humanScore} - ${computerScore}`;
  } else {
    finalResult.textContent = `🤝 It's an overall Tie! Final: ${humanScore} - ${computerScore}`;
  }
  display.appendChild(finalResult);

  // create reset button
  const resetBtn = document.createElement("button");
  resetBtn.textContent = "Play Again";
  resetBtn.classList.add("reset-btn");
  display.appendChild(resetBtn);

  resetBtn.addEventListener("click", resetGame);
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  display.innerHTML = "";
  display.appendChild(scoreboard);
  scoreboard.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;
}

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
const display = document.querySelector(".display");
const scoreboard = document.createElement("h2");
scoreboard.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;
display.appendChild(scoreboard);


function handleClick(choice) {
  if (humanScore >= 5 || computerScore >= 5) return;

  // clear old round message
  const oldMessage = document.querySelector(".round-message");
  if (oldMessage) oldMessage.remove();

  // create new round message
  const result = document.createElement("p");
  result.classList.add("round-message");
  result.textContent = playRound(choice, getComputerChoice());
  display.appendChild(result);

  // update scoreboard
  scoreboard.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;

  // check winner
  if (humanScore === 5 || computerScore === 5) {
    playGame();
  }
}


rock.addEventListener("click", () => handleClick("Rock"));
paper.addEventListener("click", () => handleClick("Paper"));
scissors.addEventListener("click", () => handleClick("Scissors"));
