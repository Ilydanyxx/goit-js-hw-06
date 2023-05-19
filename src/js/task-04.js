const value = document.querySelector("#value");
let counterValue = 0;
const buttonMinus = document.querySelector('button[data-action="decrement"]');
const buttonPlus = document.querySelector('button[data-action="increment"]');
buttonMinus.addEventListener("click", minus);
buttonPlus.addEventListener("click", plus);
console.log(counterValue);

function minus() {
    counterValue -= 1;
    value.textContent = counterValue;
}
function plus() {
    counterValue += 1;
    value.textContent = counterValue;
}
