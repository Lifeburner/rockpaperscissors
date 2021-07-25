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