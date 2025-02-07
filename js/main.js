//  Magasin de musique : Organisation des rayons

//  Instruments
const stringInstruments = ["guitare", "violon", "harpe"];
const windInstruments = ["flûte", "saxophone", "trompette"];

//  Accessoires
const headphones = ["casque", "écouteurs", "micro"];
const cables = ["câble jack", "câble USB", "câble XLR"];

//  Regroupement en départements
const instrumentsDept = [stringInstruments, windInstruments];
const accessoriesDept = [headphones, cables];

//  Magasin entier
const musicStore = [instrumentsDept, accessoriesDept];

// Accès aux éléments
console.log(musicStore[0][0][1]); // Affiche "harpe"
console.log(musicStore[1][1][0]); // Affiche "câble jack"
