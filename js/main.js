// Loops
let name="GLORIA";
let counter = 0;
let myLetter;
while (counter<=3){
  myLetter = name[counter];
  console.log(myLetter);
  if (counter===1);{
    counter+=2;
    continue;
  }
  if (myLetter==="I") break;
  counter++;

}
console.log(counter);
  
  


