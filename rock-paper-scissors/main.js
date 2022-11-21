var playerScore = 0;
var computerScore = 0;

function getComputerChoice(){
    let choices = ["r", "s", "p"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function playRound(playerSelection, computerSelection){
    var human = playerSelection;
    var ai = computerSelection;
    if (human === 'g') {
        playerScore++;
        return "You Win! Gun beats everything"
    }
    if (human.localeCompare(ai) != 0) {
        if (human == 'r' && ai == 'p'){
            computerScore++;
            return "You Lose! Paper beats Rock"
        }

        if (human == 'p' && ai == 'r'){
            playerScore++;
            return "You Win! Paper beats Rock"
        }

        if (human == 's' && ai == 'p'){
            playerScore++;
            return "You Win! Scissors beat Paper"
        }

        if (human == 'p' && ai == 's'){
            computerScore++;
            return "You Lose! Scissors beat Paper"
        }

        if (human == 's' && ai == 'r'){
            computerScore++;
            return "You Lose! Rock beats Scissors"
        }

        if (human == 'r' && ai == 's'){
            playerScore++;
            return "You Win! Rock beats Scissors"
        }
    }

    return "Tie!"
}

function setImage(pos, player){
    const emoji = {'r': "🗻",'p': "📜",'s': "✂️",'g':"🔫"};
    var images = document.getElementsByClassName('choice');
    var image = images[pos];

    if (player==='?'){
        image.textContent = player;
        return;
    }
    for (const [key,value] of Object.entries(emoji)){
        if (player === key){
            image.textContent= value;
            return;
        }
    }
}

function gameOver(){
    if (playerScore == 5){
        return "You've Won!";
    }
    if (computerScore == 5){
        return "You've Lost!"
    }
}


function playGame(playerSelection){
    var computerSelection = getComputerChoice();
    var string = playRound(playerSelection, computerSelection);
    var display = document.getElementsByClassName('why');
    display[0].textContent= string;

    setImage(0, playerSelection);
    setImage(1, computerSelection);    

    var scores = document.getElementsByClassName('score');
    scores[0].textContent = playerScore;
    scores[1].textContent = computerScore;

    var header = document.getElementsByClassName('results');
    header[0].textContent= "Choose your weapon";

    if (gameOver()){
        header[0].textContent= gameOver();
        display[0].textContent= "A player reached a score of 5"
        scores[0].textContent = 0;
        scores[1].textContent = 0;
        setImage(0, "?");
        setImage(1, "?");  
        playerScore = 0;
        computerScore = 0;
    }
}

const rBtn = document.querySelector('.r');
rBtn.addEventListener('click', function (e){
    playGame('r');
});

const sBtn = document.querySelector('.s');
sBtn.addEventListener('click', function (e){
    playGame('s');
});

const pBtn = document.querySelector('.p');
pBtn.addEventListener('click', function (e){
    playGame('p');
});

const gBtn = document.querySelector('.g');
gBtn.addEventListener('click', function (e){
    playGame('g');
});


