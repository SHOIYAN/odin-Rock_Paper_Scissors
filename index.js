// player score variables

let humanScore = 0;
let computerScore = 0;

// get computer choice

function getComputerChoice () {
    //random choice
    const compChoice = Math.floor(Math.random()*3 ) + 1;
    //hardcode options
    if (compChoice === 1) {
        return 'rock';
    }
    else if (compChoice === 2) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

getComputerChoice();

// get user choice
function getHumanChoice () {
    const userChoice = prompt('Rock, Paper or Scissors ?');
    return userChoice.toLowerCase();
}

// single round of play

function playRound (humanChoice, computerChoice) {
    if (computerChoice ===  humanChoice ) {
        console.log("It's a Tie!");
    }
    // When Computer wins
    else if (computerChoice === 'rock' && humanChoice === 'scissors') {
        console.log('You lose! Rock beats Scissors');
        computerScore++ ;
    }
    else if (computerChoice === 'scissors' && humanChoice === 'paper') {
        console.log('You lose! Scissors beats Paper');
        computerScore++ ;
    }
    else if (computerChoice === 'paper' && humanChoice === 'rock') {
        console.log('You lose! Paper beats Rock');
        computerScore++ ;
    }
    // When Player wins
    else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You win! Rock beats Scissors');
        humanScore++ ;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You win! Scissors beats Paper');
        humanScore++ ;
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You win! Paper beats Rock');
        humanScore++ ;
    }
}