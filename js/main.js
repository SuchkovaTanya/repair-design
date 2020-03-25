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

    //Валидация формы modal
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

    //Валидация формы footer
    $('.footer__form').validate({
        errorClass: "invalid",
        rules: {
          // simple rule, converted to {required:true}
          userName: {
              required: true,
              minlength: 2,
              maxlength: 15
            },
          userPhone: "required",
          userQuestion: "required",
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
            userQuestion: "Заполните поле",
            userEmail: {
              required: "Заполните поле",
              email: "Введите корректный email"
            }
          }
      });
    //Валидация формы control
    $('.control__form').validate({
        errorClass: "invalid",
        rules: {
          // simple rule, converted to {required:true}
          userName: {
              required: true,
              minlength: 2,
              maxlength: 15
            },
          userPhone: "required",
          
        },
        //Настройка сообщений об ошибках
        messages: {
            userName: {
                required: "Заполните поле",
                minlength: "Имя должно быть не менее 2 символов",
                maxlength: "Имя не должно быть больше 15 символов"
            },
            userPhone: "Заполните поле",
            
          }
      });
//Маска ввода телефона
$('[type=tel]').mask('+7(000) 000-00-00'), {placeholder: "+7 (___) ___-__-__"};

//Создание карты
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.748047, 52.015725],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),
       
          // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Средняя школа №6',
            balloonContent: 'Место моей работы'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/marker.svg',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });
        
        
    myMap.behaviors.disable('scrollZoom');
    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
    
  });
   
});


