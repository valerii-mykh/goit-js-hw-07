import { galleryItems } from './gallery-items.js';
// Change code below this line
const list = document.querySelector(".gallery");
const markup = galleryItems
  .map((galleryItems) => `<a class="gallery__link" href="large-image.jpg"> <img class="gallery__image"
  src=${galleryItems.preview}
  description="${galleryItems.description}"> </a>`)
  .join("");
  list.insertAdjacentHTML('afterBegin', markup);
console.log(galleryItems);
