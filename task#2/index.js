document.addEventListener('DOMContentLoaded', function () {
  //создаем елемент, которые будут отображать дату и количество фотографий, выбираем дату и "массив фотографий"
  const images = document.querySelectorAll('.image img');
  let div = document.createElement('div');
  const data = new Date();

  div.id = 'data_and_count';
  //вставляем текст в елемент
  div.innerHTML = `В этом альбоме ${
    images.length
  } фотографий. Сегодня ${data.getDate()}.${data.getMonth()}.${data.getFullYear()} ${data.getHours()} ${data.getMinutes()}`;
  //вставляем елемент в начало body
  document.body.prepend(div);

  //выбираем елементы для модального окна
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalImage = document.querySelector('.modal-image');
  const closeButton = document.querySelector('.closeButton');

  //добавляем обработчик, который будет открывать модальное окно при клике на фотографию
  images.forEach(function (image) {
    image.addEventListener('click', function () {
      const src = image.getAttribute('src');
      const alt = image.getAttribute('alt');
      modalImage.setAttribute('src', src);
      modalImage.setAttribute('alt', alt);
      modalOverlay.style.display = 'flex';
    });
  });
  //обработчик на закрытие модального окна
  closeButton.addEventListener('click', function () {
    modalOverlay.style.display = 'none';
  });
});

let element = document.getElementsByClassName('image__img');
