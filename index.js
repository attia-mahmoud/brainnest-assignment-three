const options = ['rock', 'paper', 'scissors']

const computerPlay = () => {
    return options[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    const p1 = playerSelection.toLowerCase()
    const c1 = computerSelection
    console.log("Computer chose " + c1)
    
    if (p1 == 'rock') {
        if (c1 == 'paper') return "You Lose! Paper beats Rock!"
        if (c1 == 'scissors') return "You Win! Rock beats Scissors!"
    }
    else if (p1 == 'scissors') {
        if (c1 == 'paper') return "You Win! Scissors beats Paper!"
        if (c1 == 'rock') return "You Lose! Rock beats Scissors!"
    } else {
        if (c1 == 'scissors') return "You Lose! Paper beats Scissors!"
        if (c1 == 'rock') return "You Win! Paper beats Rock!"
    }
    return "It's a Tie!"

}

function getWinner(playerScore, computerScore) {
    console.log(`Final Score: ${playerScore}-${computerScore}`)
    if (playerScore > computerScore) 
        return "You won, congrats!"
    else if (playerScore == computerScore)
        return "You tied against the computer!"
    else 
        return "You lose, better luck next time!"
}


function game() {
    const rounds = 5;
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection;
    console.log('Rock, Paper, Scissors Game')
    for (let i = 0; i < rounds; i++) {
        console.log(`Round ${i+1} (Current Score: ${playerScore}-${computerScore})`)
        playerSelection = prompt("Choose rock, paper, or scissors: ")
        while (!options.includes(playerSelection.toLowerCase())) {
            playerSelection = prompt("Invalid Option. Choose your weapon: ")
        }
        const result = playRound(playerSelection, computerPlay())
        if (result.substring(0, 7) == 'You Win')
            playerScore +=1
        else if (result.substring(0, 8) == 'You Lose')
            computerScore +=1
        console.log(result)
        console.log('-----------------------------------')
    }
    console.log(getWinner(playerScore, computerScore))
}

game()