let result = document.querySelector('.result');
let startButton = document.querySelector('.start');
let win = 0;
let draw = 0;
let lose = 0;

const ValidPlays = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let idx = Math.floor(Math.random() * ValidPlays.length);
    return ValidPlays[idx];
}

function playRound(playerSelection, computerSelection){
    console.log(`Player plays ${ playerSelection }`);
    console.log(`Computer plays ${ computerSelection }`);
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
    let playerSelection;
    let computerSelection;
    win = 0; draw = 0; lose = 0;
    for (let i=0; i<5; i++) {
        while (1) {
            playerSelection = prompt('What do you play?').toLowerCase();
            if (ValidPlays.indexOf(playerSelection) === -1) {
                prompt('Invalid selection! You can only choose rock, paper, scissors');
            } else {
                break;
            }
        }
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        updateResult();
    }
}
startButton.addEventListener('click', game);
