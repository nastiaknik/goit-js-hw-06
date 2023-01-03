const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт, який для кожного елемента масиву ingredients:
// 1) Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2) Додасть назву інгредієнта як його текстовий вміст.
// 3) Додасть елементу клас item.
// 4) Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

// <ul id="ingredients"></ul>
const ingredientsListEl = document.querySelector("#ingredients");
// console.log(ingredientsEl); // <ul id="ingredients">

const makeIngredientsList = (ingredients) =>
  ingredients.map((ingredient) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = ingredient;
    itemEl.classList.add("item");
    // console.log(itemEl); // <li class="item">
    return itemEl;
  });

const elements = makeIngredientsList(ingredients);
// console.log(elements); // [ li.item, li.item, li.item, li.item, li.item, li.item ]
ingredientsListEl.append(...elements);
