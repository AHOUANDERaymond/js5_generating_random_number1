//Objects
 //Key-value pairs in curly braces
 const band ={
    vocals: "Robert Plant",
    guitar: "Roland Page",
    bass: "John Paul Jones",
    drums: "John Boham"
 };



 delete band.drums;
 console.log(band.hasOwnProperty("drums"));

 console.log(Object.keys(band));
 console.log(Object.values(band));

 for (let job in band) {
    console.log(band[job]);
 }

 for (let job in band) {
    console.log(`on ${job}, it's ${band[job]} !`);
 }

