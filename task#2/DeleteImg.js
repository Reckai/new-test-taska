export const DeleteImg = (images) => {
  if (Array.isArray(images)) {
    console.log(1);
    images.forEach(function (element) {
      console.log(1);
      const img = document.createElement('img');
      img.src = '../public/icons8-cross-mark-78.png';
      img.style.width = '20px';
      img.style.height = '20px';
      img.style.position = 'absolute';
      element.after(img);
      img.addEventListener('click', function () {
        localStorage.setItem(element.id, element.id);
        element.style.display = 'none';
      });
    });
  }
};
