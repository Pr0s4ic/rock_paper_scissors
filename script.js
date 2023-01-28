// DOM Variables
let computerChoice = document.querySelector(".computer");
let playerChoice = document.querySelector(".player");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let comment = document.querySelector(".comment");
let computerTally = document.querySelector(".computer-tally");
let playerTally = document.querySelector(".player-tally");

// Computer Choices
let randomNumber = () => {
    let random = Math.ceil(Math.random() * 3);

    if (random === 1) {
        computerChoice.innerText = "Rock";
    } else if (random === 2) {
        computerChoice.innerText = "Paper";
    } else if (random === 3) {
        computerChoice.innerText = "Scissors";
    };
};

// Scoring
let computerScore = 0;
let playerScore = 0;

let tally = (winner) => {
    if (winner === "computer") {
        computerScore += 1;
        computerTally.innerText = "Computer: " + computerScore.toString();
    } else if (winner === "player") {
        playerScore += 1;
        playerTally.innerText = "Player: " + playerScore.toString();
    };

    if (playerScore === 5) {
        comment.innerText = "Player Wins!";
        rock.style.display = "none";
        paper.style.display = "none";
        scissors.style.display = "none";
    } else if (computerScore === 5) {
        comment.innerText = "Computer Wins!";
        rock.style.display = "none";
        paper.style.display = "none";
        scissors.style.display = "none";
    }
};

let scoring = (playerCheck, computerCheck) => {
    if (playerCheck === computerCheck) {
        comment.innerText = "Draw";
        comment.style.color = "black";
    } else if (playerCheck === "Rock" && computerCheck === "Paper") {
        comment.innerText = "Paper Beats Rock!";
        comment.style.color = "red";
        tally("computer");
    } else if (playerCheck === "Rock" && computerCheck === "Scissors") {
        comment.innerText = "Rock Beats Scissors!";
        comment.style.color = "green";
        tally("player");
    } else if (playerCheck === "Paper" && computerCheck === "Rock") {
        comment.innerText = "Paper Beats Rock!";
        comment.style.color = "green";
        tally("player");
    } else if (playerCheck === "Paper" && computerCheck === "Scissors") {
        comment.innerText = "Scissors Beats Paper!";
        comment.style.color = "red";
        tally("computer");
    } else if (playerCheck === "Scissors" && computerCheck === "Rock") {
        comment.innerText = "Rock Beats Scissors!";
        comment.style.color = "red";
        tally("computer");
    } else if (playerCheck === "Scissors" && computerCheck === "Paper") {
        comment.innerText = "Scissors Beats Paper!";
        comment.style.color = "green";
        tally("player");
    };
};

// Player Choices
let playerCheck;
let computerCheck;

rock.addEventListener("click", () => {
    playerChoice.innerText = "Rock";
    
    randomNumber();
    playerCheck = playerChoice.innerText;
    computerCheck = computerChoice.innerText;
    scoring(playerCheck, computerCheck);
});

paper.addEventListener("click", () => {
    playerChoice.innerText = "Paper";
    
    randomNumber();
    playerCheck = playerChoice.innerText;
    computerCheck = computerChoice.innerText;
    scoring(playerCheck, computerCheck);
});

scissors.addEventListener("click", () => {
    playerChoice.innerText = "Scissors";
    
    randomNumber();
    playerCheck = playerChoice.innerText;
    computerCheck = computerChoice.innerText;
    scoring(playerCheck, computerCheck);
});