// Your First Interactive Game
//TRES IMPORTANT
let playGame = confirm("Shall we play rock, paper, or scissors?");

if (playGame) {
    // Play
    let playerChoice = prompt("Please, enter rock, paper, or scissors");

    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();

        if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
            // Random choice for the computer
            let computerChoice = Math.floor(Math.random() * 3); // corrected 'Math.foor' to 'Math.floor' and adjusted the range
            let computer = computerChoice === 0 ? "rock"
                : computerChoice === 1 ? "paper"
                : "scissors";

            // Determine the result
            let result;
            
            if (playerOne === computer) {
                result = "Tie game!";
            } else if (playerOne === "rock" && computer === "scissors" || 
                       playerOne === "paper" && computer === "rock" || 
                       playerOne === "scissors" && computer === "paper") {
                result = `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
            } else {
                result = `playerOne: ${playerOne}\nComputer: ${computer}\ncomputer wins!`;
            }

            alert(result);
        } else {
            alert("You didn't enter rock, paper, or scissors");
        }

    } else {
        alert("I guess you changed your mind. Maybe next time.");
    }
} else {
    alert("Ok, maybe next time.");
}
