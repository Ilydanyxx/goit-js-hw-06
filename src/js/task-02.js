const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredient = document.querySelector("#ingredients");



const arr = [];
ingredients.forEach((items) => {
  const list = document.createElement("li");
  list.textContent = items;
  list.classList = "item";
  arr.push(list);
  return;
})

ingredient.append(...arr);
