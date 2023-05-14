document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.image img');
  let div = document.createElement('div');
  const data = new Date();

  div.id = 'data_and_count';
  div.innerHTML = `В этом альбоме ${
    images.length
  } фотографий. Сегодня ${data.getDate()}.${data.getMonth()}.${data.getFullYear()} ${data.getHours()} ${data.getMinutes()}`;

  document.body.prepend(div);

  const modalOverlay = document.querySelector('.modal-overlay');
  const modalImage = document.querySelector('.modal-image');
  const closeButton = document.querySelector('.closeButton');

  images.forEach(function (image) {
    image.addEventListener('click', function () {
      const src = image.getAttribute('src');
      const alt = image.getAttribute('alt');
      modalImage.setAttribute('src', src);
      modalImage.setAttribute('alt', alt);
      modalOverlay.style.display = 'flex';
    });
  });

  closeButton.addEventListener('click', function () {
    modalOverlay.style.display = 'none';
  });
});

let element = document.getElementsByClassName('image__img');
