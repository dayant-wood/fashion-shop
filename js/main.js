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
    colorItem.removeClass('primary-link');
    colorItem.toggleClass('primary-link');
  });
}); 