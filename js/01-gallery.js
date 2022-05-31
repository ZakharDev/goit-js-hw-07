import { galleryItems } from './gallery-items.js'; // подключение массива данных из файла gallery-items.js
// Change code below this line

const galleryEl = document.querySelector('.gallery'); // получение элемента галереи
galleryEl.addEventListener('click', pictureClick); // добавление обработчика события клика на элемент галереи
galleryCreate(galleryItems, galleryEl); // создание галереи

function pictureClick(event) {
  // обработчик события клика на элемент галереи
  if (event.target.nodeName !== 'IMG') {
    // проверка на клик на элементе галереи
    return; // если клик не по изображению, то выходим из функции
  }
  const instance = basicLightbox.create(
    // создание модального окна
    `<img src="${event.target.dataset.source}" width="800" height="600">` // подстановка изображения в модальное окно
  );
  instance.show(); // отображение модального окна
  window.addEventListener('keydown', (event) => {
    // обработчик события нажатия клавиши на клавиатуре
    if (event.code === 'Escape') {
      // проверка на нажатие клавиши Escape
      instance.close(); // закрытие модального окна
    }
    window.removeEventListener('keydown', event); // удаление обработчика события нажатия клавиши на клавиатуре
  });
}

function galleryCreate(list, place) {
  // функция создания галереи
  const markup = list
    .map(
      (
        event // подстановка данных из массива в шаблон
      ) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${event.original}"> 
                <img
                class="gallery__image"
                src="${event.preview}"
                data-source="${event.original}"
                alt="${event.description}"
                onclick='event.preventDefault()'
                />
            </a>
        </div>`
    )
    .join(''); // создание строки из массива
  place.innerHTML = markup; // вставка строки в элемент галереи
}
