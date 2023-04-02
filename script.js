//button initializations
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const choice = ['rock', 'paper', 'scissors'];


//score keepers
let playerScore = 0;
let computerScore = 0;

//computer's decision
function computerDecision(){
    return Math.floor(Math.random()*choice.length);
}

//user selectection
rockButton.addEventListener('click', () => {
    return choice[0];
});
paperButton.addEventListener('click', () => {
    return choice[1];
});
scissorsButton.addEventListener('click', () => {
    return choice[2];
});


