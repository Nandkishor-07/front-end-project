document.addEventListener("DOMContentLoaded", function () {
    var counter = document.querySelector(".counter");
    var increament = document.querySelector(".increment");
    var decreament = document.querySelector(".decrement");
    var incrementBynum = document.getElementById("incrementbtn");
    var reset = document.querySelector(".reset");
    var count = 0;
    incrementBynum.addEventListener("input", function (e) {
        var target = e.target;
        var result = parseInt(target.value) || 1;
        counter.innerHTML = String(result + count);
    });
    increament.addEventListener("click", function () {
        counter.innerHTML = String(++count);
    });
    decreament.addEventListener("click", function () {
        if (count <= 0)
            return 1;
        counter.innerText = String(--count);
    });
    reset.addEventListener("click", function () {
        counter.innerText = String(0);
        count = 0;
    });
});
