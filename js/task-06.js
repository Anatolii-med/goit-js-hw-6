const inputArea = document.getElementById("validation-input");

const validationLength = Number(inputArea.getAttribute("data-length"));

const fnInputAreaBlur = (event) => {
  if (inputArea.hasAttribute("class")) {
    inputArea.removeAttribute("class");
  }

  if (event.currentTarget.value.length !== validationLength) {
    inputArea.classList.add("invalid");
    return;
  }
  inputArea.classList.add("valid");
};

inputArea.addEventListener("blur", fnInputAreaBlur);
