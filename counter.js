console.log("Hello World");
console.log(window.document);
const increase = document.getElementById('c1');
const decrease = document.getElementById('c2');
const increase10 = document.getElementById('c3');
const reset = document.getElementById('c4');
const counter = document.getElementById('counter')

let count = 0;

increase.addEventListener('click', function () {
    count++;
    counter.textContent = count;
})

decrease.addEventListener('click', function () {
    count--;
    counter.textContent = count;
})

increase10.addEventListener('click', function () {
    count = count + 10;
    counter.textContent = count;

})

reset.addEventListener('click', function () {
    counter.textContent = 0;
})