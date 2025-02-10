//Objects
 //Key-value pairs in curly braces
 const vehicle = {
    wheels: 4,
    engine: function() {
        return "Vroooom!";

    }
 };


 
 const car = Object.create(vehicle);
 car.doors = 4;
 car.engine = function(){
    return "Whooooooosh!";

 };



 console.log(car.engine());

