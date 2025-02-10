//Objects
 //Key-value pairs in curly braces
 const band ={
    vocals: "Robert Plant",
    guitar: "Roland Page",
    bass: "John Paul Jones",
    drums: "John Boham"
 };

 console.log(Object.keys(band));
 console.log(Object.values(band));

 for (let job in band) {
    console.log(band[job]);
 }


