//Objects
 //Key-value pairs in curly braces
 const band ={
    vocals: "Robert Plant",
    guitar: "Roland Page",
    bass: "John Paul Jones",
    drums: "John Boham"
 };


//destructuring objects

const { vocals, guitar, bass, drums} = band;

console.log(guitar);
console.log(vocals);

function sings({vocals}){return`${vocals} sings!`};
console.log(sings(band));



