//Objects
 //Key-value pairs in curly braces
 const vehicle = {
    wheels: 4,
    engine: function() {
        return "Vroooom!";

    }
 };
  
 const truck = Object.create(vehicle);
 truck.doors = 2;
 console.log(truck);
 console.log(truck.wheels); //inheritance
 console.log(truck.engine());
 const car = Object.create(vehicle);
 car.doors = 4;
 car.engine = function(){
    return "Whooooooosh!";

 };



 console.log(car.engine());

