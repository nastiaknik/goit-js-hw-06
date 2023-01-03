const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Напиши скрипт для ств галереї зобр на підставі масиву даних.
// HTML містить список ul.gallery
// <ul class="gallery"></ul>

// Викор масив об'єктів images для ств елементів <img>, вкладених в <li>.
// Для ств розмітки викор шабл рядки і метод insertAdjacentHTML().

// Додай мін оформлення галереї флексбоксами або грідами через CSS класи.

const galleryEl = document.querySelector(".gallery");
// console.log(galleryEl); // <ul class="gallery">

const makeGallery = ({ url, alt }) => {
  return `<li class="gallery__item"><img class = "gallery__image" src="${url}" alt="${alt}" width="400" /></li>
  `;
};

const makeGalleryCard = images.map(makeGallery).join(""); // .join("") - щоб ком не було
galleryEl.insertAdjacentHTML("afterbegin", makeGalleryCard);

console.log(makeGalleryCard);
