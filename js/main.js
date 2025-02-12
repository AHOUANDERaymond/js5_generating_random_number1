//Javascript classes

class Pizza{
   constructor(pizzatype) {
      this.type = pizzatype;
      this.size = "medium";
      this.crust = "original";

   }
   bake() {
      console.log(
         `Baking a ${this.size} ${this.crust} ${this.type} crust pizza`);
   }



}

const myPizza = new Pizza();
const myPizza1 = new Pizza();
const myPizza2 = new Pizza();



myPizza.bake();




