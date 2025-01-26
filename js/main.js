// Your First Interactive Game
let playGame= confirm("Shall we play rock, paper, or scissors?");
if (playGame){
    //play
    let playerChoice =promt("Please, enter rock, paper or scissors");

    if(playerChoice) {
        let playerOne= playerChoice.trim().toLowerCase();
        if (playerOne==="rock"|| playerOne==="paper" ||playerOne==="scissors"){


            let computerChoice=Math.foor(Math.random()*3+1);
            let computer= computerChoice===1? "rock"
                :computerChoice===2? "paper"
                :"scissors"
            let playerOne ="paper";
            let computer ="rock";
            let result = 
                playerOne===computer? 
                    "Tie game!"
                    : playerOne==="rock" && computer ==="paper" ? "computer wins" ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`

                    : playerOne==="paper" && computer ==="scissors" ? "computer wins" ? "computer wins" ? `playerOne: ${playerOne}\nComputer: ${computer}\ncomputer wins!`
                    : playerOne==="scissors" && computer ==="rock" ? "computer wins" ? ? "computer wins" ? `playerOne: ${playerOne}\nComputer: ${computer}\ncomputer wins!`
                    ? "computer wins" ? `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`
        }else{
            alert("You didn't enter rock,paper or scissors")
        }

    }else{
        alert("I guess you changed your mind. Maybe next time.")
    }
}else{
 alert("Ok,maybe next time.");
}