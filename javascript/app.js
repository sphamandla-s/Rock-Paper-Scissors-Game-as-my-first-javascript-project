const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const winner = document.querySelector("#winner");
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const reset = document.querySelector("#reset");
const rounds = document.querySelector("#rounds")
const computerMoves = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;


rock.addEventListener('click', () => {
    gamesPlayedUpdate()
    let compMove = computerMoves[randomNum()];
    switch (compMove) {
        case 'Scissors':
            playerScoreUpdate()
            winner.innerText = `Rock crush Scissors. You Win!`
            break;
        case 'Paper':
            computerScoreUpdate()
            winner.innerText = `Paper covers Rock. You Lose!`
            break;    
        default:
            winner.innerText = "DRAW"
            break;
    }
})

paper.addEventListener('click', () => {
    gamesPlayedUpdate()
    let compMove = computerMoves[randomNum()];
    switch (compMove) {
        case 'Rock':
            playerScoreUpdate()
            winner.innerText = `Paper covers Rock. You Win!`
            break;
        case 'Scissors':
            computerScoreUpdate()
            winner.innerText = `Scissors cut Paper. You Lose!`
            break;    
        default:
            winner.innerText = "DRAW"
            break;
    }
})


scissors.addEventListener('click', () => {
    gamesPlayedUpdate()
    let compMove = computerMoves[randomNum()];
    switch (compMove) {
        case 'Paper':
            playerScoreUpdate()
            winner.innerText = `Scissors cut Paper. You Win!`
            break;
        case 'Rock':
            computerScoreUpdate()
            winner.innerText = `Rock crush Scissors. You Lose!`
            break;    
        default:
            winner.innerText = "DRAW"
            break;
    }
})


reset.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    computer.innerHTML = 0;
    player.innerHTML = 0;
    gamesPlayed = 0;
    rounds.innerHTML = `games played: ${gamesPlayed}`;
    winner.innerText = `You rested the game! Make Your Move!`
})

function randomNum(){
    return Math.floor(Math.random() * 3);
}

function playerScoreUpdate(){
    playerScore += 1;
    player.innerHTML = playerScore;
}

function computerScoreUpdate(){
    computerScore += 1;
    computer.innerHTML = computerScore;
}

function gamesPlayedUpdate(){
    gamesPlayed += 1;
    rounds.innerHTML = `games played: ${gamesPlayed}`;
}