document.addEventListener("DOMContentLoaded", function(event) {
  const modal = document.querySelector('.modal');
  // таким образом мы обратимся к модальному окну
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  // переменная в которой перебирается неск вложенных элементов 
  const closeBtn = document.querySelector('.modal__close');
  // функц закрывает модальное окно
  const switchModal = () => {
    modal.classList.toggle('modal--visible');/* функц вызывает модальное окно */
  }

  modalBtn.forEach(element => {
    // element - кнопка 1 или кнопка 2 | addEventListener - слушатель событий | toggle - кнопка вкл/выкл
    element.addEventListener('click', switchModal);
  });
  
  closeBtn.addEventListener('click', switchModal);

});