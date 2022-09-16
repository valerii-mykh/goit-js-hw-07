import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gall = document.querySelector('.gallery');

function createGalleryMarkup(items) {
  return items.map((item) => `<div class="gallery__item"> 
  <a class="gallery__link" href="${item.original}"> 
  <img class="gallery__image" 
  src="${item.preview}" 
  data-source="${item.original}" 
  alt="${item.description}" /> 
  </a> 
  </div>`).join('');
}

const addGalleryMarkup = createGalleryMarkup(galleryItems);

gall.innerHTML = addGalleryMarkup;
gall.addEventListener("click", onImageClick);
function onImageClick(evt) {
  // заборона відкривання картинки, браузером
  blockStandartAction(evt);

  if (evt.target.nodeName !== 'IMG'){
    return;
  }

  const intance = basicLightbox.create(`
  <img src="${evt.target.dataset.source}" width="800" height="600">
  `);
  intance.show();

  gall.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
intance.close();      
    }
  });
}
function blockStandartAction(evt) {
  evt.preventDefault();
}