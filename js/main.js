// //Conditionals: Ternary Operator


//suntax
//Condition? ifTrue: ifFalse;

let testScore= 12;
let myGrade= 
    testScore>89
        ? "A"
        :testScore>79
        ? "B"
        :testScore>69
        ? "C"
        :testScore>59
        ? "D"
        : "F";

console.log(`My test grade is a ${myGrade}`)