const options = [
    'rock',
    'paper',
    'scissors'
]



function getComputerChoice() {
    return options[(Math.floor(Math.random() * 3))]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Round Tie'
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return 'Round Win!'
    } 
    else {
        return 'Round Lose!'
    }
}

function results(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Tie'
    } 
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return "user"
    }
    else {
        return "computer"
    }
}

function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false) {
        const choice = prompt("Rock Paper or Scissors!")
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        }
    }
    
}

function game() {
    let userScore = 0;
    let computerScore = 0;
    for (let i = 0; i  < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        if (results(playerSelection, computerSelection) === "user") {
            userScore++;
        } 
        else if (results(playerSelection, computerSelection) === "computer") {
            computerScore++;
        } 

            
        

    }    
    console.log('Match Finished!')
    if (userScore > computerScore) {
        console.log('You won the match!')

    } 
    
    else if (userScore < computerScore) {
          console.log('You lost the match!')
    }
    else {
        console.log('Its a tie!')
    }
    
    
}  

game()

