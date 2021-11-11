const range = document.getElementById("font-size-control");
const text = document.getElementById("text");

range.addEventListener("input", () => {
  let sizeValue = Number(range.value);
  text.style.fontSize = sizeValue + "px";
});
