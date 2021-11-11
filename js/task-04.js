const counter = document.getElementById("value");
const increment = document.querySelector('[data-action="increment"]');
const decrement = document.querySelector('[data-action="decrement"]');

let result = 0;

const incrementFunction = () => {
  counter.textContent = result += 1;
};
const decrementFunction = () => {
  counter.textContent = result -= 1;
};

increment.addEventListener("click", incrementFunction);
decrement.addEventListener("click", decrementFunction);
