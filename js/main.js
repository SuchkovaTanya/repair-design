document.addEventListener("DOMContentLoaded", function(event) {
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

});