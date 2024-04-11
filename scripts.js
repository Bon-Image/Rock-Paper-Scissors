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

/* function playerSelection() {
    return prompt("Please select an item:").toLowerCase();
} */

// We use Strings to represents data.
// (String, String) -> String 
// Takes the computer's selection together with the user's selection to compute the results (Winner).
// User just runs the play, the idea is to press the play button, then insert his/hers input.

function playRound(evt) {

    const userSelection = evt.target.textContent.toLowerCase();
    console.log(userSelection);
    const computerSelection = getComputerChoice(); // select the computer choice. 
    console.log("Computer Selection is :" + computerSelection)


    if (computerSelection === userSelection) {
        result.textContent = "Tie!"
    }
    else if (computerSelection === "paper" && userSelection === "rock") {
        result.textContent = "You lose! Paper beats rock"

    }
    else if (computerSelection === "scissors" && userSelection === "paper") {
        result.textContent = "You lose! scissors beats paper"
    }
    else if (computerSelection === "rock" && userSelection === "scissors") {
        result.textContent = "You lose! rock  beats scissors"
    }
    else {
        result.textContent = "You won!"
    }
    console.log(result.textContent)
    adjustScore(result.textContent)


}

const adjustScore = function (roundResult) {

    switch (roundResult) {
        case "Tie!":
            break
        case "You won!":
            playerScore += 1;
            break
        default:
            computerScore += 1;
    }
    console.log(playerScore, computerScore);
    scores.textContent = `Player Score: ${playerScore}, Computer Score : ${computerScore}`;
    gameOver(playerScore, computerScore); 
}

const gameOver = function(ps, cs) {

    if (ps == 5 && cs < 5) {
        winner.textContent = "Game is over! The winner is: You lucky player!";   
    } 
    else if (cs == 5 && ps < 5) {
        winner.textContent = "Game is over! The winner is: The Machine!" ;  
    }
    else{
        true
    }

}

let playerScore = 0;
let computerScore = 0;

const selections = document.createElement("div") // Parent for event delegation. 
// Button creation
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
// User signifier 
selections.textContent = "Please Select Your Choice:"; 

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

document.body.appendChild(selections);
selections.appendChild(rock);
selections.appendChild(paper);
selections.appendChild(scissors);

selections.addEventListener("click", playRound)

const result = document.createElement("div");
const scores = document.createElement("div");
const winner = document.createElement("div"); 
document.body.appendChild(result); 
document.body.appendChild(scores);
document.body.appendChild(winner); 






// We use numbers to represents how many times the user has won the game. 
// no-argument -> Integer
// This function runs five times, at each round takes note who win the game and in the end
// returns the number of rounds the user has won the game.

/* 
    function playGame() {
        let userScore = 0;
        for (let i = 1; i <= 5; i++) {
            if (playRound() === "You won!") {
                userScore++
            }
        }
        return userScore


    } */

