//Javascript Error and Error handling

"use strict";
const makeError = () => {
   try{
      throw new customError("This is a custom error")
      // const name = "Raymond";

      // throw new Error("this is an error");
      name = "Raymond";

   }  catch (err) {
      console.error(err.stack);

   }
};
makeError();

function customError(message) {
   this.message = message;
   this.name = "customerError";
   this.stack = `${this.name}: ${this.meassage}`;
}