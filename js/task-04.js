// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і
// зменшувати його значення на одиницю.

{
  /* <div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div> */
}

// Створи змінну counterValue, в якій буде зберігатися поточне знач лічильника та
// ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй знач лічильника
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counterValue = {
  value: 0,
  increment() {
    this.value += 1;
  },
  decrement() {
    this.value -= 1;
  },
};

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);

function onDecrementBtnClick(event) {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
}

function onIncrementBtnClick(event) {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
}
