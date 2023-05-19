const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const b = document.querySelector("#ingredients");



let arr = [];
ingredients.forEach((items) => {
  const a = document.createElement("li");
  a.textContent = items;
  a.classList = "item";
  b.append(a);

})

