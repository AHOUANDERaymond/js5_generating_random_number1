let customerIsBanned = true;
let soup = "chicken noodle soup";
let reply;
let crackers = true;

if (customerIsBanned) {
    reply = "No soup for you!";
} else if (soup && crackers) {  // Utilisation de `&&` pour vérifier les deux
    reply = `Here is your order of ${soup} & crackers`;  // Utilisation de backticks pour les variables
} else if (soup) {
    reply = `Here is your order of ${soup}`;
}

if (soup) {
    reply = `Here is your order of ${soup}`;  // Correction avec backticks
} else {
    reply = `Sorry, we are out of ${soup}`;  // Correction avec backticks
}

console.log(reply);