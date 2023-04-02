//button initializations
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const choice = ['rock', 'paper', 'scissors'];
let computerDecsion;
//score keepers
let playerScore = 0;
let computerScore = 0;

//computer's decision

//function to compare results
function compare(playerChoice){
    //if both the player's selection and computer's selection are the same, its a tied game
    let computerDecision = Math.floor(Math.random() * choice.length);

    if(playerChoice === choice[computerDecision]){
        console.log('tie Game!')
    }
    //if player's selection is rock and computer's selection is paper, computer wins
    else if(playerChoice === choice[0] && choice[computerDecision] === choice[1]){
        console.log('Computer Wins!');
    }
    //if player's selection is rock and computer's selection is scissors, player wins
    else if(playerChoice === choice[0] && choice[computerDecision] === choice[2]){
        console.log('player wins!');
    }
    //if player's selection is paper and computer selection is rock, player winse
    else if(playerChoice === choice[1] && choice[computerDecision] === choice[0]){
        console.log('player wins')
    }
    //if player's selection is paper and computer selection is scissors, computer wins
    else if(playerChoice === choice[1] && choice[computerDecision] === choice[2]){
        console.log('computer wins!')
    }
    //if player's selection is scissors and computer selection is rock, computer wins
    else if(playerChoice === choice[2] && choice[computerDecision] === choice[0]){
        console.log('computer wins')
    }
    //if player's selection is scissors and computer selection is paper, player wins
    else if(playerChoice === choice[2] && choice[computerDecision] === choice[1]){
        console.log('player wins!');
    }
    else{
        console.log('error!', playerChoice, choice[computerDecision]);

    }
    
        
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


