"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
var message = "Hello, TypeScript!";
console.log(message);
var myname = "this is nandkishor";
console.log(myname);
document.addEventListener("DOMContentLoaded", function () {
  var counter = document.querySelector(".counter");
  var increament = document.querySelector(".increment");
  var decreament = document.querySelector(".decrement");
  var incrementBynum = document.getElementById("incrementbtn");
  var reset = document.querySelector(".reset");

  let count = 0;
  // let userInput = 1;

  incrementBynum.addEventListener("input", (e) => {
    let Result = parseInt(e.target.value) || 1;
    counter.innerHTML = Result + count;
    count ++;
  });

  increament.addEventListener("click", function () {
    counter.innerHTML = ++count;
  });

  decreament.addEventListener("click", () => {
    if (count <= 0) return 1;
    counter.innerText = --count;
  });

  reset.addEventListener("click", () => {
    counter.innerText = 0;
    count = 0;
  });
});
