//Objects
 //Key-value pairs in curly braces
 const myObj = { name: "Raymond"};

 const infoObj = {
    alive: true,
    age: 30,
    hobbies:["Eat", "Sleep", "Code"],
    beverage: {
        morning: "Coffee",
        afternoon: "Tea"
    },

    action: function(){
        return `Time for ${this.beverage.morning}`;

    }


 }



 console.log(infoObj.action());

