/*
document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  // таким образом мы обратимся к модальному окну
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  // переменная в которой перебирается неск вложенных элементов 
  const closeBtn = document.querySelector('.modal__close');
  // функц закрывает модальное окно
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  }/* функц вызывает модальное окно (добавляя класс в div ) 

  modalBtn.forEach(element => {
    // element - кнопка 1 или кнопка 2 | addEventListener - слушатель событий | toggle - кнопка вкл/выкл
    element.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);
  // switchModal (так называн) - toggle вкл и выкл доп. класс
});
*/

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
      
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
});

var offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
  offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
  scrollDuration = 700;