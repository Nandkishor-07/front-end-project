document.addEventListener("DOMContentLoaded", function () {
  var counter = document.querySelector(".counter") as HTMLSpanElement;
  var increament = document.querySelector(".increment") as HTMLButtonElement;
  var decreament = document.querySelector(".decrement") as HTMLButtonElement;
  var incrementBynum = document.getElementById(
    "incrementbtn"
  ) as HTMLInputElement;
  var reset = document.querySelector(".reset") as HTMLButtonElement;

  let count: number = 0;

  incrementBynum.addEventListener("input", (e: Event) => {
    let target = e.target as HTMLInputElement;
    const result: number = parseInt(target.value) || 1;
    counter.innerHTML = String(result + count);
  });

  increament.addEventListener("click", function () {
    counter.innerHTML = String(++count);
  });

  decreament.addEventListener("click", () => {
    if (count <= 0) return 1;
    counter.innerText = String(--count);
  });

  reset.addEventListener("click", () => {
    counter.innerText = String(0);
    count = 0;
  });
});
