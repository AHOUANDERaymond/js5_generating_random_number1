// Javascript Event Listeners

const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");

const h1 = div.querySelector("h1");


//Syntax: addEventListener(Event, functon, useCapture)


const doSomething = () => {
   alert("doing some thing");

};

h2.addEventListener("click", doSomething,false);
h2.removeEventListener("click", doSomething,false);
h3.removeEventListener("click", doSomething,false);


h2.addEventListener("click", function(event) {
   console.log(event.target);
   event.target.textContent = "Clicked";
});