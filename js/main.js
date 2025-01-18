//Your first code challenge

//Write code that will return a random name  from my list

//console.log("Raymond Ray".charAt(Math.floor(Math.random()*4+1)));


const prenoms = ["Raymond", "Ray", "Jean", "Marie", "Pierre", "Claire"];
const randomPrenom = prenoms[Math.floor(Math.random() * prenoms.length)];

console.log(randomPrenom);


