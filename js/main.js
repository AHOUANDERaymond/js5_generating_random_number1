// var, let and const
//global scope
var x=1;
let y=2;
const z=3;
//local scope
function myFunc() {
    // const z=5;
    console.log();
    //local scope
    {
        let y=4;
        console.log(z);


    }

}
myFunc();