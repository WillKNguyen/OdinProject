function getComputerChoice(){
    let choices = ["rock", "scissors", "paper"]
    return choices[Math.floor(Math.random()*choices.length)]
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    var choices =[playerSelection.charAt(0), computerSelection.charAt(0)];
    var human = choices[0];
    var ai = choices[1];
    if (human.localeCompare(ai) != 0) {
        if (human == 'r' && ai == 'p'){
            return "You lose! Paper beats Rock"
        }

        if (human == 'p' && ai == 'r'){
            return "You Win! Paper beats Rock"
        }

        if (human == 's' && ai == 'p'){
            return "You Win! Scissors beat Paper"
        }

        if (human == 'p' && ai == 's'){
            return "You Lose! Scissors beat Paper"
        }

        if (human == 's' && ai == 'r'){
            return "You Lose! Rock beats Scissors"
        }

        if (human == 'r' && ai == 's'){
            return "You Win! Rock beats Scissors"
        }
    }

    return "Tie!"
}

function game(){
    for (let i = 0; i < 5; i++) {
        console.log(playRound(prompt("Enter choice","rock"),getComputerChoice())); 
    }
}