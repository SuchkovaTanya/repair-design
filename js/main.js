/*document.addEventListener("DOMContentLoaded", function(event) {
    const modal = document.querySelector ( '.modal' );
    const modalBtn = document.querySelectorAll('[data-toggle=modal]');
    const closeBtn = document.querySelector ( '.modal__close' );
    //const closeObyekt = document.querySelector ( '.modal' );
    const swithModal = () => {
        modal.classList.toggle('modal--visible');
    }

   modalBtn.forEach(element => {
       element.addEventListener('click',swithModal);     
   });
   
   //closeObyekt.addEventListener('click',swithModal);
   closeBtn.addEventListener('click',swithModal);

});*/
//Настройки формы - модальное окно
$(document).ready(function() {
    var modal=$('.modal'),
        modalBtn=$('[data-toggle=modal]'),
        closeBtn=$('.modal__close');
    modalBtn.on('click', function(){
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function(){
        modal.toggleClass('modal--visible');
    });
    //Настройки слайдера
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
      })
    var next=$('.swiper-button-next');
    var prev=$('.swiper-button-prev');
    var bullets=$('.swiper-pagination');
    next.css('left', prev.width()+20+bullets.width()+20);
    bullets.css('left', prev.width()+20);
    //Активация анимации с применением скролинга
    new WOW().init();

    //Валидация формы
    $('.modal__form').validate({
        errorClass: "invalid",
        rules: {
          // simple rule, converted to {required:true}
          userName: {
              required: true,
              minlength: 2,
              maxlength: 15
            },
          userPhone: "required",
          // compound rule
          userEmail: {
            required: true,
            email: true
          }
        },
        //Настройка сообщений об ошибках
        messages: {
            userName: {
                required: "Заполните поле",
                minlength: "Имя должно быть не менее 2 символов",
                maxlength: "Имя не должно быть больше 15 символов"
            },
            userPhone: "Заполните поле",
            userEmail: {
              required: "Заполните поле",
              email: "Введите корректный email"
            }
          }
      });
//Маска ввода телефона
$('[type=tel]').mask('+7(000) 000-00-00'), {placeholder: "+7 (___) ___-__-__"};
})