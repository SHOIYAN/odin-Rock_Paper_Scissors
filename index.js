
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