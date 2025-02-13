//JSON: Javascript Object Notation
/* 
JSON is used to send and receive Data. 
JSON is a text format that is completely language independant. 
Meaning JSON is used to dend and receive data from any languages  
...not just in Javascript.
*/

const myObj = {
   name :"Raymond",
   hobbies: ["eat", "sleep", "code"],
   hello: function() {
      console.log("Hello");

   }

};
console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);

console.log(sendJSON);

console.log(typeof sendJSON);
