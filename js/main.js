$(document).ready(function () {

//open mobile-menu  
var menuButton = $(".menu-button");
menuButton.on("click", openMenu);
 
  function openMenu () {
    $(".navbar").toggleClass('navbar--visible');
    $("body").toggleClass("hidden"); 
      
  };
 
//tabs 
var linkItem = $(".trending__item");
var contentItem = $(".trending__photos-wrapper"); 
var colorItem = $(".trending__link");
  linkItem.on("click", function(event){
    event.preventDefault();
    var activeContent= $(this).attr("data-target");
    contentItem.removeClass('trending__photos-wrapper--active');
    $(activeContent).toggleClass('trending__photos-wrapper--active');
    // colorItem.removeClass('primary-link');
    // colorItem.toggleClass('primary-link');
    
  });


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


var storiesSwiper = new Swiper('.stories-slider', {
  // Optional parameters
  
  loop: true,  

  slidesPerView: 2,

  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
  
});

$('#slide').click(storiesSwiper, function(event){
  event.preventDefault();
    storiesSwiper.slideToLoop(2,1000,false);
});

  $(".form").each(function() {
    $(this).validate({
    errorClass: "invalid",
    messages: {
    name: {
      required: "Please, specify your name",
      minlength: "Name should contain minimum 3 characters",
    },
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com",
    },
    phone: {
      required: "Please, specify your phone number",
      minlength: "Please, enter the full number",
    },
    sub_mail: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com",
    }, 
  },
      
});
});


}); 