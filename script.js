//button initializations
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const threeGamesButton = document.getElementById('three_games');
const fiveGamesButton = document.getElementById('five_games');
const sevenGamesButton = document.getElementById('seven_games');

//other initializations
const choice = ['rock', 'paper', 'scissors'];
const gameContainer = document.getElementById('game_container');
const startupContainer = document.getElementById('startup_container');
const resultsInformation = document.getElementById('results');
//score keepers
let playerScore = 0;
let computerScore = 0;
let amountOfGamesPlayed = 0;
let gameLimit = 0;

//set game limit
function setGameLimit(element){
    gameLimit = element;
}

//toggles for game and startup containers
function showGameContainer(){
    gameContainer.style.display = 'block';
}
function hideGameContainer(){
    gameContainer.style.display = 'none';
}
function showStartupContainer(){
    startupContainer.style.display = 'block';
}
function hideStartupContainer(){
    startupContainer.style.display = 'none';
}

//score handlers and modifiers
function increasePlayerScore(){
    playerScore++;
    gamesPlayed();
    document.getElementById('player_score').innerText = playerScore;
    resultsInformation.innerText = 'Player Won!';
}

function increaseComputerScore(){
    computerScore++;
    gamesPlayed();
    document.getElementById('computer_score').innerText = computerScore;
    resultsInformation.innerText = 'The Computer Won!';
}

function gamesPlayed(){
    amountOfGamesPlayed++;
    document.getElementById('games_played').innerText = amountOfGamesPlayed;
    resultsInformation.innerText = "Tie Game!";
}

//function to compare results
function compare(playerChoice){
    //if both the player's selection and computer's selection are the same, its a tied game
    let computerDecision = Math.floor(Math.random() * choice.length);

    if(playerChoice === choice[computerDecision]){
        gamesPlayed();
    }
    //if player's selection is rock and computer's selection is paper, computer wins
    else if(playerChoice === choice[0] && choice[computerDecision] === choice[1]){
        increaseComputerScore();
    }
    //if player's selection is rock and computer's selection is scissors, player wins
    else if(playerChoice === choice[0] && choice[computerDecision] === choice[2]){
        increasePlayerScore();
    }
    //if player's selection is paper and computer selection is rock, player wins
    else if(playerChoice === choice[1] && choice[computerDecision] === choice[0]){
        increasePlayerScore();
    }
    //if player's selection is paper and computer selection is scissors, computer wins
    else if(playerChoice === choice[1] && choice[computerDecision] === choice[2]){
        increaseComputerScore();
    }
    //if player's selection is scissors and computer selection is rock, computer wins
    else if(playerChoice === choice[2] && choice[computerDecision] === choice[0]){
        increaseComputerScore();
    }
    //if player's selection is scissors and computer selection is paper, player wins
    else if(playerChoice === choice[2] && choice[computerDecision] === choice[1]){
        increasePlayerScore();
    }
    else
        console.log('error!', playerChoice, choice[computerDecision]); 
};

//user selectection/buttons
rockButton.addEventListener('click', () => {
    compare(choice[0]);
});
paperButton.addEventListener('click', () => {
    compare(choice[1]);
});
scissorsButton.addEventListener('click', () => {
    compare(choice[2]);
});
threeGamesButton.addEventListener('click', () => {
    setGameLimit(3);
    hideStartupContainer();
    showGameContainer();
    
});
fiveGamesButton.addEventListener('click', () => {
    setGameLimit(5);
    hideStartupContainer();
    showGameContainer();
});
sevenGamesButton.addEventListener('click', () => {
    setGameLimit(7);
    hideStartupContainer();
    showGameContainer();
});


