function computerPlay() {
    // show the choices computer can choose
    var choices = ['Rock', 'Paper', 'Scissors']
    // use Math.random to randomly select the choices
    var comChoice = choices[Math.floor(Math.random()*choices.length)];
    // return output of Computer
    return comChoice;
}

function humanPlay() {
    var humChoice = prompt("Your choice: ");
    
    return humChoice
}

function playRound(playerSelection,computerSelection) {
    var player = humanPlay();
    var computer = computerPlay();

    var playerSelection = player.charAt(0).toUpperCase() + player.slice(1).toLowerCase();
    var computerSelection = computer.charAt(0).toUpperCase() + computer.slice(1).toLowerCase();

    if (playerSelection === computerSelection) {
        return result = (`It is a tie!`)
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return ("You Win! " + playerSelection + " beats " + computerSelection);
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return ("You Win! " + playerSelection + " beats " + computerSelection);
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return ("You Win! " + playerSelection + " beats " + computerSelection);
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return ("You Lose! " + computerSelection + " beats " + playerSelection);
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        return ("You Lose! " + computerSelection + " beats " + playerSelection);
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return ("You Lose! " + computerSelection + " beats " + playerSelection);
    } else {
        return ("Something went wrong");
    }
}  

function game() {  
    let playerScore = 0;
    let computerScore = 0; 

    for (let round = 1; round < 6; round++) {
        // your code here!
        var result = playRound();

        if (result.includes("You Win! ") === true) {
            playerScore = playerScore + 1;
        } else if (result.includes("You Lose!") === true) {
            computerScore = computerScore + 1;
        }
        console.log(`This is Round ${round}.\n${result}\nPlayer's Score: ${playerScore} | Computer's Score: ${computerScore}`)
    }
 
}







