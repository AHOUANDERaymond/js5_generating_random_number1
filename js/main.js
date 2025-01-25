// //Conditionals: Ternary Operator

//Syntax
//condition ? ifTrue : ifFalse;

let playerOne ="paper";
let computer ="rock";
let result = 
    playerOne===computer? 
        "Tie game!"
        : playerOne==="rock" && computer ==="paper" ? "computer wins"
        : playerOne==="paper" && computer ==="scissors" ? "computer wins"
        : playerOne==="scissors" && computer ==="rock" ? "computer wins";
console.log(result);