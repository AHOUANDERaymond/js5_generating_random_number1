//Functions

//Functions declaration Syntax:

// function getUserNameFromEmail(email) {
//   return email.slice(0,email.indexOf("@"));

// }
// console.log(getUserNameFromEmail("raymondahouande@gmail.com"));


const getUserNameFromEmail = function(email) {
  return email.slice(0,email.indexOf("@"));

}
console.log(getUserNameFromEmail("raymondahouande@gmail.com"));
