function computerPlay() {
    randomNumber = Math.floor(Math.random()*3);
    
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return;
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
        return "Tie.";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Rock beats scissors. Player wins.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "Paper beats rock. Computer wins.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Scissors beats paper. Player wins.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "Rock beats scissors. Computer wins.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "Paper beats rock. Player wins.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "Scissors beats paper. Computer wins."; 
    } else {
        return "Invalid selection.";
    }
}

function game() {
    let playerSelection, computerSelection, playerScore, computerScore;
    computerScore = 0;
    playerScore = 0;

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Choose rock, paper or scissors: ");
        computerSelection = computerPlay();

        message = playRound(playerSelection, computerSelection);
        console.log(message);
        
        if (message.includes("Player")) {
            ++playerScore;
        }
        if (message.includes("Computer")) {
            ++computerScore;
        }
    }

    if (playerScore > computerScore) {
        console.log(`Player wins ${playerScore} to ${computerScore}!`);
    } else if (computerScore > playerScore) {
        console.log(`Computer wins ${computerScore} to ${playerScore}!`);
    } else if (computerScore === playerScore) {
        console.log("It's a tie!");
    }

}

game();