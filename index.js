function computerPlay () {
    let x = Math.floor(Math.random() * 3);
    if (x === 0) { return "rock"; }
    else if (x === 1) { return "paper"; }
    else { return "scissors"; }
}

function rpsRound (playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();
    if (player === "rock") {
        if (computer === "rock") { return "tied"; }
        else if (computer === "paper") { return "computer wins"; }
        else { return "you win"; }
    }
    if (player === "paper") {
        if (computer === "rock") { return "you win"; }
        else if (computer === "paper") { return "tied" }
        else { return "computer wins"; }
    }
    if (player === "scissors") {
        if (computer === "rock") { return "computer wins"; }
        else if (computer === "paper") { return "you win"; }
        else {return "tied"; }
    }
}

function game () {
    let playerScore = 0;
    let computerScore = 0;
    for (let index = 0; index < 5; index++) {
        let choice = window.prompt("Enter 'rock', 'paper', or 'scissors'");
        let round = rpsRound(choice, computerPlay());
        if (round === "you win") { playerScore++; }
        else if (round === "computer wins") { computerScore++; }
        else {
            playerScore = playerScore + 0.5;
            computerScore = computerScore + 0.5;
        }
    }
    console.log("Your score is " + playerScore.toString());
    console.log("The computer's score is " + computerScore.toString());
}