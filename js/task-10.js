// Користувач вводить к-сть елем в input
// і натискає кнопку Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.

// 1) Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Ф - я ств стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// 2) Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// 3) Всі елементи повинні мати випадковий колір фону у форматі HEX.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// 4) Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи
// всі створені елементи.

{
  /* <div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div> */
}

const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("input[type='number']");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

const elements = [];

createBtn.addEventListener("click", createBoxes);

function createBoxes(amount) {
  for (let i = 0; i < Number(inputEl.value); i += 1) {
    // value повертає рядок!
    const coloredBox = document.createElement("div");
    coloredBox.classList.add("boxes__item");
    coloredBox.style.backgroundColor = getRandomHexColor();

    const boxSizeCounter = Number(30 + 10 * i) + "px";
    coloredBox.style.width = boxSizeCounter;
    coloredBox.style.height = boxSizeCounter;

    elements.push(coloredBox);
    // console.log(elements); // 2 - [ div.boxes__item, div.boxes__item ]
  }
  boxesEl.append(...elements);
}

destroyBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxesEl.innerHTML = "";
  elements.splice(0, 100);
  inputEl.value = 1;
}
