// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// Яка к-сть символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна к-сть символів, то border інпуту стає зеленим,
// якщо неправильна кількість - червоним.

{
  /* <input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/> */
}

const inputEl = document.querySelector("#validation-input");
const neededNumberSymbols = Number(inputEl.dataset.length);

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (neededNumberSymbols === inputEl.value.length) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
