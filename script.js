let result = document.querySelector('.result');
let playerButtons = document.querySelectorAll('.player');
let currentRound = document.querySelector('.current-round');
let winner = document.querySelector('.winner');
let restartButton = document.querySelector('.restart');
restartButton.disabled = true;
let win = 0;
let draw = 0;
let lose = 0;

const ValidPlays = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let idx = Math.floor(Math.random() * ValidPlays.length);
    return ValidPlays[idx];
}

function playRound(playerSelection, computerSelection){
    currentRound.textContent = '';
    currentRound.textContent += `Player plays ${ playerSelection }, `;
    currentRound.textContent += `Computer plays ${ computerSelection }.`;
    if (playerSelection == computerSelection) {
        draw++;
        return;
    }
    let diff_index = ValidPlays.indexOf(playerSelection) - ValidPlays.indexOf(computerSelection);
    diff_index = (diff_index + 3) % 3;
    if (diff_index == 1) {
        win++;
        return;
    }
    if (diff_index == 2) {
        lose++;
        return;
    }
}

function updateResult() {
    console.log(result);
    result.textContent = `Result: ${ win } wins, ${ draw } draws, ${ lose } losses.`
}

function game() {
    win = 0; draw = 0; lose = 0;
}

function checkWinner() {
    if (win < 5 && lose < 5) {return;}
    if (win === 5) {
        winner.textContent = 'Player wins!';
        playerButtons.forEach( function (button) {
            button.disabled = true;
        });
    }
    if (lose === 5) {
        winner.textContent = 'Computer wins!';
        playerButtons.forEach( function (button) {
            button.disabled = true;
        });
    }
    restartButton.disabled = false;
}

function handleClick (e) {
    let playerSelection = e.target.id;
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    updateResult();
    checkWinner();
}

function restart() {
    win = 0;
    draw = 0;
    lose = 0;
    currentRound.textContent = '';
    winner.textContent = '';
    result.textContent = '';
    playerButtons.forEach((button) => {
        button.disabled = false
    });
    restartButton.disabled = true;
}

playerButtons.forEach(key => key.addEventListener('click', handleClick));
restartButton.addEventListener('click', restart);