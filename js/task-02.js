const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const ingElMarkup = (ingradient) => {
  const singleEl = document.createElement("li");
  singleEl.classList.add("item");
  singleEl.textContent = ingradient;
  return singleEl;
};

const ingradientsList = ingredients.map(ingElMarkup);

ingredientsEl.append(...ingradientsList);
