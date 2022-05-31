import { galleryItems } from './gallery-items.js'; // подключение массива данных из файла gallery-items.js

// Change code below this line

const galleryEl = document.querySelector('.gallery'); // получение элемента галереи
galleryCreate(galleryItems, galleryEl); // создание галереи

new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 }); // подключение модального окна к галерее

function galleryCreate(list, place) {
  // функция создания галереи
  const markup = list
    .map(
      (
        event // подстановка данных из массива в шаблон
      ) =>
        `<li><a class="gallery__item" href="${event.original}"
         onclick="event.preventDefault()">
        <img class="gallery__image" src="${event.preview}" 
        alt="${event.description}" />
        </a></li>`
    )
    .join(''); // создание строки из массива
  place.innerHTML = markup; // вставка строки в элемент галереи
}
