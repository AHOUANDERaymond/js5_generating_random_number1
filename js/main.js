//Javascript classes

class Pizza{
   constructor(pizzatype) {
      this.type = pizzatype;
      this.size = "mediums";
      this.crust = "originals";

   }
   bake() {
      console.log(
         `Baking a ${this.size} ${this.crust} ${this.type} crust pizza`);
   }



}

const myPizza0 = new Pizza();
const myPizza1 = new Pizza();
const myPizza2 = new Pizza();
const myPizza3 = new Pizza();



myPizza.bake();




