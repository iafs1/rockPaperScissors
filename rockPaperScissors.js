let playerScore, computerScore, gameCount;
computerScore = 0;
playerScore = 0;
gameCount = 0;

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

function game(playerSelection) {
    message = playRound(playerSelection, computerPlay());
    gameCount++;
    
    if (message.includes("Player")) {
        ++playerScore;
    }
    if (message.includes("Computer")) {
        ++computerScore;
    }

    console.log(`${message} Score: ${playerScore}P, ${computerScore}C. `);
    
    if (playerScore === 5) {
        console.log(`Player wins ${playerScore} to ${computerScore}!`);
        playerScore = 0;
        computerScore = 0;
        gameCount = 0;
    }
    if (computerScore === 5) {
        console.log(`Computer wins ${computerScore} to ${playerScore}!`);
        playerScore = 0;
        computerScore = 0;
        gameCount = 0;
    }
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => game(`${button.textContent}`));
});