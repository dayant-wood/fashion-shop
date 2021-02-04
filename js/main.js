$(document).ready(function () {

// //open mobile-menu  
// var menuButton = $(".menu-button");
// menuButton.on("click", openMenu);
 
//   function openMenu () {
//     $(".navbar").toggleClass('navbar--visible');
//     $("body").toggleClass("hidden"); 
      
//   };
 
//tabs 
var linkItem = $(".trending__item");
var contentItem = $(".trending__photos-wrapper"); 
var linkChangeColour= $(".trending__link");

  linkItem.on("click", function(event){
    event.preventDefault();
    var activeContent= $(this).attr("data-target");
    contentItem.removeClass("trending__photos-wrapper--active");
    linkItem.removeClass("trending__item--active");
    $(this).addClass("trending__item--active");
    $(activeContent).addClass("trending__photos-wrapper--active");
   
});




//open mobile-menu  
var menuButton = $(".menu-button");
var closeMobileButton = $(".mobile__close");
menuButton.on("click", openMenu);
closeMobileButton.on("click", closeMobileMenu);
 
  function openMenu () {
    $(".mobile").toggleClass('mobile--visible');
    $("body").toggleClass("hidden"); 
  }
  function closeMobileMenu(event) {
     event.preventDefault();
    $(".mobile").removeClass('mobile--visible');
    $("body").toggleClass("hidden"); 

};
 

var reviewsSwiper = new Swiper('.reviews-container', {
  // Optional parameters
  
  loop: true,
  

  // autoplay: {
  //   delay: 7000,
  // },

  disableOnInteraction: true,
  
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
 
   keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
});  

$(".reviews-container").hover(
  function () {
    this.swiper.autoplay.stop();
  },
  function () {
    this.swiper.autoplay.start();
  }
);

var storiesSwiper = new Swiper('.stories-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.stories-slider-button--next',
    prevEl: '.stories-slider-button--prev', 
    disabledClass: 'stories-slider-button--disabled',
  },
});

$('#slide').click(storiesSwiper, function(event){
  event.preventDefault();
    storiesSwiper.slideToLoop(2,1000,false);
});


$(".modal__form").each(function() {
    $(this).validate({
    errorClass: "invalid",
    messages: {
    
    name: {
      required: "Введите логин",
      minlength: "Имя должно быть не короче 3 символов",
    },
    
    password: {
      required: "Введите пароль",
    },
  },
      
});
});

$(".newsletter__form").each(function() {
    $(this).validate({
    errorClass: "error",
    messages: {
           
    sub_mail: {
      required: "Введите e-mail",
      email: "Ваш e-mail должен быть в формате name@domain.com",
    }, 
  },
      
});
});


//modal window
var modalButton = $("[data-toggle=modal]");
var closeModalButton = $(".modal__close");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    
  }
  
   function closeModal(event) {
     event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  
  $(document).on('keydown', function (d) {
    if (d.keyCode===27) {
      var modalOverlay = $(".modal__overlay");
      var modalDialog = $(".modal__dialog");
      modalOverlay.removeClass("modal__overlay--visible");
      modalDialog.removeClass("modal__dialog--visible");
  }
  }); 


}); 