//Javascript Error and Error handling

"use strict";
const makeError = () => {
   let i=1;
   while (i<=5) {
      try{
         throw new Error("this is an error");

      }  catch (err) {
         console.error(err.name);
         console.error(err.messages);
         console.error(err.stack);

      } finally {
         console 
      }
   }

   }
;
makeError();