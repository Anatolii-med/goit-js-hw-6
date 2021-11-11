function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createEl = document.querySelector("[data-create]");
const destroyEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("#controls").firstElementChild;

let numOfBoxes = 0;
let size = 30;

function fnAddBoxes() {
  for (let i = 0; i < Number(inputEl.value); i += 1) {
    const boxEl = document.createElement("div");
    boxEl.style.backgroundColor = getRandomHexColor();
    boxEl.style.width = `${size}px`;
    boxEl.style.height = `${size}px`;
    size += 10;
    boxEl.style.margin = "5px";
    boxesEl.append(boxEl);
  }
}

function fnDestroyBoxes() {
  size = 30;
  inputEl.value = "";
  boxesEl.innerHTML = "";
}

createEl.addEventListener("click", fnAddBoxes);
destroyEl.addEventListener("click", fnDestroyBoxes);
