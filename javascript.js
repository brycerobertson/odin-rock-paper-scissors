
const choices = ["rock", "paper", "scissors"]

let playerSelection;
let computerSelection;

let playerWins = 0;
let computerWins = 0;

function getComputerChoice () {
    computerSelection = choices[Math.floor(Math.random()*3)];
}

function getPlayerChoice () {
    playerSelection = prompt("Choose Rock, Paper or Scissors");
    playerSelection.toLowerCase();
}

function playRound () {
    getComputerChoice();
    getPlayerChoice();

    let compareChoices = choices.indexOf(playerSelection)-choices.indexOf(computerSelection);

    if (compareChoices === 1 || compareChoices === -2) {
        return 1;
    } else if (compareChoices === -1 || compareChoices === 2) {
        return 2;
    } else {
        return 3;
    }
}


function playGame() {
    let round = 0;
    do {
        let result = playRound();
        round++;
        if (result === 1) {
            console.log(`You win round ${round}! ${playerSelection} beats ${computerSelection}`);
            playerWins++;
        } else if (result === 2) {
            console.log(`You lose round ${round}! ${computerSelection} beats ${playerSelection}`);
            computerWins++;
        } else {
            console.log(`Tie round ${round}! ${computerSelection} ties ${playerSelection}`);
        }
    }
    while (playerWins < 2 && computerWins < 2);

    if (playerWins === 2) {
        console.log(`You win the game! :D`)
    } else {
        console.log(`You lose the game! D:`)
    }
}

playGame();
