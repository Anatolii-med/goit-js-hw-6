const navCategoriesEL = document.querySelector("#categories");
const navCategoriesChildren = navCategoriesEL.children;
console.log(`Number of categories: ${navCategoriesChildren.length}`);

for (let child of navCategoriesChildren) {
  const categoryElementName = child.firstElementChild.textContent;
  const categoryElementCount = child.lastElementChild.children.length;
  console.log(`Category: ${categoryElementName}`);
  console.log(`Elements: ${categoryElementCount}`);
}
