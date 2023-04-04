//button initializations
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const threeGamesButton = document.getElementById('three_games');
const fiveGamesButton = document.getElementById('five_games');
const sevenGamesButton = document.getElementById('seven_games');
const homeButton = document.getElementById('home');

//other initializations
const choice = ['rock', 'paper', 'scissors'];
const gameContainer = document.getElementById('game_container');
const startupContainer = document.getElementById('startup_container');
const resultsInformation = document.getElementById('results');
const playerChoiceImage = document.getElementById('player_choice_img');
const computerChoiceImage = document.getElementById('computer_choice_img');
const middleMessage = document.getElementById('middle_message');
const imgPlayer = document.createElement("img");
const imgComputer = document.createElement("img");
const imgMiddleMessage = document.createElement("img");
//score keepers
let playerScore = 0;
let computerScore = 0;
let amountOfGamesPlayed = 0;
let gameLimit = 0;
let computerChoice = getComputerChoice();
let playerChoice;

//image handle
function createImage(src, width, height, container){
    imgPlayer.src = src;
    imgPlayer.width = width;
    imgPlayer.height = height;
    container.appendChild(imgPlayer);
}

function createImageComputer(src, width, height, container){
    imgComputer.src = src;
    imgComputer.width = width;
    imgComputer.height = height;
    container.appendChild(imgComputer);
}

function createImageMiddle(src, width, height, container){
    imgMiddleMessage.src = src;
    imgMiddleMessage.width = width;
    imgMiddleMessage.height = height;
    container.appendChild(imgMiddleMessage);
}

//choice images (player)
function displayRockImage(){
    createImage('assets/rock.png', 250, 250, playerChoiceImage);
}

function displayPaperImage(){
    return createImage('assets/paper.png', 250, 250, playerChoiceImage);
}

function displayScissorsImage(){
    return createImage('assets/scissors.png', 250, 250, playerChoiceImage);
}

//choice images (computer)
function displayRockImageComputer(){
    createImageComputer('assets/rock.png', 250, 250, computerChoiceImage);
}

function displayPaperImageComputer(){
    return createImageComputer('assets/paper.png', 250, 250, computerChoiceImage);
}

function displayScissorsImageComputer(){
    return createImageComputer('assets/scissors.png', 250, 250, computerChoiceImage);
}


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

function getComputerChoice(){
    return Math.floor(Math.random() * choice.length);
}


//function to compare results
function compare(playerChoice, computerChoice){
    //if both the player's selection and computer's selection are the same, its a tied game
    if(playerChoice === choice[computerChoice]){
        if(imgPlayer != undefined && imgComputer != undefined){
            imgPlayer.remove();
            imgComputer.remove();
            resultsInformation.innerText = 'Tied Game';
        }     
    }
    //if player's selection is rock and computer's selection is paper, computer wins
    else if(playerChoice === choice[0] && choice[computerChoice] === choice[1]){
        displayRockImage();
        displayPaperImageComputer();
        increaseComputerScore();
    }
    //if player's selection is rock and computer's selection is scissors, player wins
    else if(playerChoice === choice[0] && choice[computerChoice] === choice[2]){
        displayRockImage();
        displayScissorsImageComputer();
        increasePlayerScore();
    }
    //if player's selection is paper and computer selection is rock, player wins
    else if(playerChoice === choice[1] && choice[computerChoice]=== choice[0]){
        displayPaperImage();
        displayRockImageComputer();
        increasePlayerScore();
    }
    //if player's selection is paper and computer selection is scissors, computer wins
    else if(playerChoice === choice[1] && choice[computerChoice] === choice[2]){
        displayPaperImage();
        displayScissorsImageComputer();
        increaseComputerScore();
    }
    //if player's selection is scissors and computer selection is rock, computer wins
    else if(playerChoice === choice[2] && choice[computerChoice] === choice[0]){
        displayScissorsImage();
        displayRockImageComputer();
        increaseComputerScore();
    }
    //if player's selection is scissors and computer selection is paper, player wins
    else if(playerChoice === choice[2] && choice[computerChoice] === choice[1]){
        displayScissorsImage();
        displayPaperImageComputer();
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
});
paperButton.addEventListener('click', () => {
    playerChoice = choice[1];
    game();
});
scissorsButton.addEventListener('click', () => {
    playerChoice = choice[2];
    game();
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

homeButton.addEventListener('click', () => {
    window.location.reload();
});

//main game function
function game(){
    if(amountOfGamesPlayed < gameLimit){
        compare(playerChoice, getComputerChoice());
        gamesPlayed();
    }

    if(amountOfGamesPlayed == gameLimit){
        if(playerScore > computerScore){
            imgPlayer.remove();
            imgComputer.remove();
            createImageMiddle('assets/game_over.png', 150, 150, middleMessage);
            resultsInformation.innerText = 'Game Over! Player Wins!';
        }
        else if(computerScore > playerScore){
            imgPlayer.remove();
            imgComputer.remove();
            createImageMiddle('assets/game_over.png', 150, 150, middleMessage);
            resultsInformation.innerText = 'Game Over! Computer Wins!';
        }
        else{
            console.log("Tied game, non wins!");
        }
    }
}