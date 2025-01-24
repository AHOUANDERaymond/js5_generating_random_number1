// //Conditionals: Ternary Operator

// Définition des variables
let age = 45;
let revenusMensuels = 3000;

// Utilisation de l'opérateur ternaire pour vérifier l'éligibilité
let eligibilite = 
    age >= 18 && revenusMensuels >= 5000
        ? "Eligible pour un prêt"
        : "Non éligible pour un prêt";

// Affichage du résultat
console.log(`La personne est : ${eligibilite}`);
