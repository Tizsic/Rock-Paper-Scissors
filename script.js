//button initializations
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const choice = ['rock', 'paper', 'scissors'];

//score keepers
let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;
let gameLimit = 0;

//set game limit
function setGameLimit(element){
    gameLimit = element;
}

//function to compare results
function compare(playerChoice){
    //if both the player's selection and computer's selection are the same, its a tied game
    let computerDecision = Math.floor(Math.random() * choice.length);

    if(playerChoice === choice[computerDecision]){
        gamesPlayed++;
    }
    //if player's selection is rock and computer's selection is paper, computer wins
    else if(playerChoice === choice[0] && choice[computerDecision] === choice[1]){
        gamesPlayed++;
        computerScore++;
    }
    //if player's selection is rock and computer's selection is scissors, player wins
    else if(playerChoice === choice[0] && choice[computerDecision] === choice[2]){
        gamesPlayed++;
        playerScore++;
    }
    //if player's selection is paper and computer selection is rock, player wins
    else if(playerChoice === choice[1] && choice[computerDecision] === choice[0]){
        gamesPlayed++;
        playerScore++;
    }
    //if player's selection is paper and computer selection is scissors, computer wins
    else if(playerChoice === choice[1] && choice[computerDecision] === choice[2]){
        gamesPlayed++;
        computerScore++;
    }
    //if player's selection is scissors and computer selection is rock, computer wins
    else if(playerChoice === choice[2] && choice[computerDecision] === choice[0]){
        gamesPlayed++;
        computerScore++;
    }
    //if player's selection is scissors and computer selection is paper, player wins
    else if(playerChoice === choice[2] && choice[computerDecision] === choice[1]){
        gamesPlayed++;
        playerScore++;
    }
    else
        console.log('error!', playerChoice, choice[computerDecision]); 
};

//user selectection
rockButton.addEventListener('click', () => {
    compare(choice[0]);
});
paperButton.addEventListener('click', () => {
    compare(choice[1]);
});
scissorsButton.addEventListener('click', () => {
    compare(choice[2]);
});

//


