//Arrays

const equipShelfA = ["baseball", "football", "volleyball"];

const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];

const clothesShelfB = ["sweat tops", "sweat pants", "hoodles"];

console.log(equipShelfA[1]);
//or
console.log(clothesShelfB[0]);

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);