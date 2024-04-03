// We use Strings to represents the results. 
// no-arguments -> String 
// Selecs a random element from the array ["Rock", "Paper", "Scissors"]
// call getComputerChoice() , expect a random element from the array ["Rock", "Paper", "Scissors"]. 

function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"]; // Options of the game. 
    return options[Math.floor(Math.random() * options.length)].toLowerCase(); // Math.random() gives us a random number in 
    // [0, 1), by multiplying it wiht the array's length we'll have a number in [0, 2,9999), pass it
    // to the floor function to round it to the next upper integer, [0, 1) -> 1, [1, 2) -> 2, [1, 2) -> 3
}


// We use Strings to represent the player's choice. 
// no-arguments -> String 
// Reads the user choice by prompting a message. 
// Read the choice , should expect rock, paper scissors, case-insensitive.

function playerSelection() {
    return prompt("Please select an item:").toLowerCase();
}

// We use Strings to represents data.
// (String, String) -> String 
// Takes the computer's selection together with the user's selection to compute the results (Winner).
// User just runs the play, the idea is to press the play button, then insert his/hers input.

function playRound() {

    const userSelection = playerSelection(); // asks for user input. 
    const computerSelection = getComputerChoice(); // select the computer choice. 
    console.log("Computer Selection is :" + computerSelection)


    if (computerSelection === userSelection) {
        return "Tie!"
    }
    else if (computerSelection === "paper" && userSelection === "rock") {
        return "You lose! Paper beats rock"
    }
    else if (computerSelection === "scissors" && userSelection === "paper") {
        return "You lose! scissors beats paper"
    }
    else if (computerSelection === "rock" && userSelection === "scissors") {
        return "You lose! rock  beats scissors"
    }
    else {
        return "You won!"
    }
}

    // We use numbers to represents how many times the user has won the game. 
    // no-argument -> Integer
    // This function runs five times, at each round takes note who win the game and in the end 
    // returns the number of rounds the user has won the game.


    function playGame() {
        let userScore = 0;
        for (let i = 1; i <= 5; i++) {
            if (playRound() === "You won!") {
                userScore++
            }
        }
        return userScore


    }

