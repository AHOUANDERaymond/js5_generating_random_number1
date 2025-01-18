//Conditionals: If statements

let customerIsBanned=true;
let soup="chicken noodle soup"
let reply;
let crackers=true;

if (customerIsBanned){
    reply="No soup for you!";
} else if (soup & crackers) {
    reply='Here is your order of ${soup} & crackers';
} else if (soup) {
    reply='Here is your order of ${soup}';
}



 
if (soup){
    reply='Here is your order of $(soup)';
    
}else{
    reply='Sorry, we are out of $(soup)';

}
console.log(reply)