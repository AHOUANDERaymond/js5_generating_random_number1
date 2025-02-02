// var, let and const


// Variables globales
var globalVar = "Je suis var";
let globalLet = "Je suis let";
const globalConst = "Je suis const";

console.log("Avant la fonction:");
console.log("Global var:", globalVar);
console.log("Global let:", globalLet);
console.log("Global const:", globalConst);

function testScope() {
    var globalVar = "Var dans la fonction";
    let globalLet = "Let dans la fonction";
    // globalConst = "Const dans la fonction"; 
    // Que se passe-t-il si on essaie de modifier globalConst ?

    console.log("\nDans la fonction:");
    console.log("Var:", globalVar);
    console.log("Let:", globalLet);
    console.log("Const:", globalConst);

    {
        var globalVar = "Var dans le bloc";
        let globalLet = "Let dans le bloc";
        const globalConst = "Const dans le bloc";

        console.log("\nDans le bloc:");
        console.log("Var:", globalVar);
        console.log("Let:", globalLet);
        console.log("Const:", globalConst);
    }

    console.log("\nAprès le bloc, dans la fonction:");
    console.log("Var:", globalVar); // Que remarquez-vous ici ?
    console.log("Let:", globalLet);
    console.log("Const:", globalConst);
}

testScope();

console.log("\nAprès la fonction:");
console.log("Global var:", globalVar); // Est-ce que la valeur a changé ?
console.log("Global let:", globalLet);
console.log("Global const:", globalConst);
