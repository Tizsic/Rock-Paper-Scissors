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
const choiceAnimation = document.getElementById('choice_animation');


//score keepers
let playerScore = 0;
let computerScore = 0;
let amountOfGamesPlayed = 0;
let gameLimit = 0;
let playerImg = document.createElement("img");
let computerImg = document.createElement("img");
const Img = document.createElement("img");
let computerChoice = getComputerChoice();
let playerChoice;

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
    document.getElementById('player_score').innerText = playerScore;
    resultsInformation.innerText = 'Player Won!';
}

function increaseComputerScore(){
    computerScore++;
    document.getElementById('computer_score').innerText = computerScore;
    resultsInformation.innerText = 'The Computer Won!';
}

function gamesPlayed(){
    amountOfGamesPlayed++;
    document.getElementById('games_played').innerText = amountOfGamesPlayed;
}

//show images/choices
function displayComputerImage(src, width, height){
    computerImg.src = src;
    computerImg.width = width;
    computerImg.height = height;
    choiceAnimation.appendChild(computerImg);
}

function displayPlayerImage(src, width, height){
    playerImg.src = src;
    playerImg.width = width;
    playerImg.height = height;
    choiceAnimation.appendChild(playerImg);
}

function image(src, width, height){
    Img.src = src;
    Img.width = width;
    Img.height = height;
    choiceAnimation.appendChild(Img);
}

function removeChoiceImages(img){
    if(img != null){
        choiceAnimation.removeChild(img);
    }
    else if(img == null){
        console.log("1");
    }
    else{
        console.log(img);
    }
}

function getComputerChoice(){
    return Math.floor(Math.random() * choice.length);
}



//function to compare results
function compare(playerChoice, computerChoice){
    //if both the player's selection and computer's selection are the same, its a tied game
    if(playerChoice === choice[computerChoice]){
        removeChoiceImages(playerImg);
        removeChoiceImages(computerImg);
        resultsInformation.innerText = 'Tied Game';
        image('assets/tie.png', 150, 150);
    }
    //if player's selection is rock and computer's selection is paper, computer wins
    else if(playerChoice === choice[0] && choice[computerChoice] === choice[1]){
        displayPlayerImage('assets/rock.png', 150, 150);
        displayComputerImage('assets/paper.png', 150, 150);
        increaseComputerScore();
    }
    //if player's selection is rock and computer's selection is scissors, player wins
    else if(playerChoice === choice[0] && choice[computerChoice] === choice[2]){
        displayPlayerImage('assets/rock.png', 150, 150);
        displayComputerImage('assets/scissors.png', 150, 150);
        increasePlayerScore();
    }
    //if player's selection is paper and computer selection is rock, player wins
    else if(playerChoice === choice[1] && choice[computerChoice]=== choice[0]){
        displayPlayerImage('assets/paper.png', 150, 150);
        displayComputerImage('assets/rock.png', 150, 150);
        increasePlayerScore();
    }
    //if player's selection is paper and computer selection is scissors, computer wins
    else if(playerChoice === choice[1] && choice[computerChoice] === choice[2]){
        displayPlayerImage('assets/paper.png', 150, 150);
        displayComputerImage('assets/scissors.png', 150, 150);
        increaseComputerScore();
    }
    //if player's selection is scissors and computer selection is rock, computer wins
    else if(playerChoice === choice[2] && choice[computerChoice] === choice[0]){
        displayPlayerImage('assets/scissors.png', 150, 150);
        displayComputerImage('assets/rock.png', 150, 150);
        increaseComputerScore();
    }
    //if player's selection is scissors and computer selection is paper, player wins
    else if(playerChoice === choice[2] && choice[computerChoice] === choice[1]){
        displayPlayerImage('assets/scissors.png', 150, 150);
        displayComputerImage('assets/paper.png', 150, 150);
        increasePlayerScore();
    }
    else{
        console.log('error!', playerChoice, choice[computerChoice]); 
    }
};

//user selectection/buttons
rockButton.addEventListener('click', () => {
    playerChoice = choice[0];
    game();
    removeChoiceImages();
});
paperButton.addEventListener('click', () => {
    playerChoice = choice[1];
    game();
    removeChoiceImages();
});
scissorsButton.addEventListener('click', () => {
    playerChoice = choice[2];
    game();
    removeChoiceImages();
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

//main game function
function game(){
    if(amountOfGamesPlayed < gameLimit){
        compare(playerChoice, getComputerChoice());
        gamesPlayed();
    }
    if(amountOfGamesPlayed == gameLimit){
        if(playerScore > computerScore){
            console.log("Player wins!");
            removeChoiceImages(playerImg);
            removeChoiceImages(computerImg);
            image('assets/game_over.png', 150, 150);
            resultsInformation.innerText = 'Game Over! Player Wins!';
        }
        else if(computerScore > playerScore){
            console.log("Computer Wins!");
            removeChoiceImages(playerImg);
            removeChoiceImages(computerImg);
            image('assets/game_over.png', 150, 150);
            resultsInformation.innerText = 'Game Over! Computer Wins!';
        }
        else{
            console.log("Tied game");
            image('assets/game_over.png', 150, 150);
        }
    }
}