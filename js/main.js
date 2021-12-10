$(function(){
  $('.rev__slider').slick({
    autoplay:true,
    autoplayspeed: 500,
    infinite: true,
    arrows: false,
    dots:true,
  });

})

"use strict"
document.addEventListener('DOMContentLoaded', function(){
  const form=document.getElementById('form');
  form.addEventListener('submit', formSend);
  async function formSend(e) {
    e.preventDefault();


    let error=formValidate(forn);
    
  }

  function formValidate(form){
    let error=0;
    let formReq= document.querySelectorAll('._req');

    for(let index=0; index<formReq.length; index++) {
      const input=formReq[index]
      formRemoveError(input);

      if(input.classList.contains('_email')) {

        
      }


    }
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  
  }

  




});

function backtotop(){
  let button=$('.back-to-top');
  $(window).on('scroll',()=> {
    if ($(this).scrollTop()>=50){
      button.fadeIn();
    } else {
      button.fadeOut();
    }
  });

button.on('click', (e) => {
  e.preventDefault();
  $('html').animate({scrolltol:0}, 1000);
})

}






