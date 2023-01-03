// Напиши скрипт, який:
// 1) Порахує і виведе в консоль к-сть категорій в ul#categories
// 2) Для кожного элемента li.item у списку ul#categories, знайде і виведе текст заголовку
// елемента (тег <h2>) і к-сть елементів в категорії(усіх лішок вкладених в нього).

// В консолі:
// Number of categories: 3
// Category: Animals // Elements: 4
// Category: Products // Elements: 3
// Category: Technologies // Elements: 5

// 1.
const categories = document.querySelectorAll(".item");
// console.log(categories); // NodeList(3) [ li.item, li.item, li.item ]
const categoryAmount = categories.length;
// console.log(categoryAmount); // 3
console.log(`Number of categories: ${categoryAmount}`); // Number of categories: 3

// 2.
categories.forEach(function (item) {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
});
