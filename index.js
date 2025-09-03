// player score variables

let humanScore = 0;
let computerScore = 0;

// get computer choice

function getComputerChoice () {
    //random choice
    const compChoice = Math.floor(Math.random()*3 ) + 1;
    //hardcode options
    if (compChoice === 1) {
        return 'Rock';
    }
    else if (compChoice === 2) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}

// single round of play

function playRound (humanChoice, computerChoice) {
    if (computerChoice ===  humanChoice ) {
        console.log("It's a Tie!");
    }
    // When Computer wins
    else if (computerChoice === 'Rock' && humanChoice === 'Scissors') {
        console.log('You lose! Rock beats Scissors');
        computerScore++ ;
    }
    else if (computerChoice === 'Scissors' && humanChoice === 'Paper') {
        console.log('You lose! Scissors beats Paper');
        computerScore++ ;
    }
    else if (computerChoice === 'Paper' && humanChoice === 'Rock') {
        console.log('You lose! Paper beats Rock');
        computerScore++ ;
    }
    // When Player wins
    else if (humanChoice === 'Rock' && computerChoice === 'Scissors') {
        console.log('You win! Rock beats Scissors');
        humanScore++ ;
    }
    else if (humanChoice === 'Scissors' && computerChoice === 'Paper') {
        console.log('You win! Scissors beats Paper');
        humanScore++ ;
    }
    else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
        console.log('You win! Paper beats Rock');
        humanScore++ ;
    }
}

// 5rounds of play

function playGame () {
    // 5 rounds of play
    // for (let i = 1; i <= 5; i++){
    //     const usrChoice = getHumanChoice();
    //     const computerChoice = getComputerChoice();
    //     playRound(usrChoice, computerChoice);
    // }
    // declare winner
    if (humanScore > computerScore){
        console.log("'You Win'. Congratulations!");
    }
    else if (humanScore < computerScore){
        console.log("You Lose!"); 
    }
    else {
        console.log("It's an overall Tie!");
    }
    console.log(`Your Score: ${humanScore}, Comp Score: ${computerScore}`);
}

// buttons 
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

// div

const h1 = document.querySelector('h1');

document.createElement('div');


//rock 
rock.addEventListener('click',()=> {
    playRound(rock.textContent, getComputerChoice());
});
//paper
paper.addEventListener('click',()=> {
    playRound(rock.textContent, getComputerChoice());
});
//scissors
scissors.addEventListener('click',()=> {
    playRound(rock.textContent, getComputerChoice());
});
