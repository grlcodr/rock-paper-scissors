let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.scoreboard');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const userChoice_div = document.getElementById('user-choice');
const computerChoice_div = document.getElementById('computer-choice');


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function capitalize(word) {
    if (word === 'rock') return 'Rock';
    if (word === 'paper') return 'Paper';
    if (word === 'scissors') return 'Scissors';
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    userChoice_div.style.display = 'block';
    userChoice_div.innerHTML = `You picked ${capitalize(userChoice)}`;
    computerChoice_div.style.display = 'block';
    computerChoice_div.innerHTML = `Computer picked ${capitalize(computerChoice)}`;
    result_div.innerHTML = `${capitalize(userChoice)} beats ${capitalize(computerChoice)}. You win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    userChoice_div.style.display = 'block';
    userChoice_div.innerHTML = `You picked ${capitalize(userChoice)}`;
    computerChoice_div.style.display = 'block';
    computerChoice_div.innerHTML = `Computer picked ${capitalize(computerChoice)}`;
    result_div.innerHTML = `${capitalize(computerChoice)} beats ${capitalize(userChoice)}. Computer wins!`;
    document.getElementById(userChoice).classList.add('pink-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('pink-glow'), 300);
}

function draw(userChoice, computerChoice) {
    userChoice_div.style.display = 'block';
    userChoice_div.innerHTML = `You picked ${capitalize(userChoice)}`;
    computerChoice_div.style.display = 'block';
    computerChoice_div.innerHTML = `Computer picked ${capitalize(computerChoice)}`;
    result_div.innerHTML = `It's a draw!`;
    document.getElementById(userChoice).classList.add('blue-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('blue-glow'), 300);
}

function game (userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper': 
            win(userChoice, computerChoice);
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, computerChoice);
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(userChoice, computerChoice);
            break;
    }
}

game();

function main() {
    rock_div.addEventListener('click', () => game('rock'));   
    paper_div.addEventListener('click', () => game('paper'));
    scissors_div.addEventListener('click', () => game('scissors'));
}

main();