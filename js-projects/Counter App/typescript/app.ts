export {};
let message: string = "Hello, TypeScript!";
console.log(message);

let myname: string = "this is nandkishor";
console.log(myname);

document.addEventListener("DOMContentLoaded", () => {
  const counter = document.querySelector<HTMLElement>(".counter");
  const increament = document.querySelector<HTMLButtonElement>(".increment");
  const decreament = document.querySelector<HTMLButtonElement>(".decrement");
  const incrementBynum = document.getElementById("incrementbtn") as HTMLInputElement;
  const reset = document.querySelector<HTMLButtonElement>("reset");

if (increament && counter){
    increament.addEventListener('click',()=>{
    })
}






});
