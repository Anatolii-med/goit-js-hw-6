const inputValue = document.getElementById("name-input");
const outputValue = document.getElementById("name-output");

const inputChange = (event) => {
  outputValue.textContent =
    inputValue.value === "" ? "Anonymous" : event.currentTarget.value;
};

inputValue.addEventListener("input", inputChange);
