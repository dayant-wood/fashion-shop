$(document).ready(function () {

var menuButton = $(".menu-button");
menuButton.on("click", openMenu);
 
  function openMenu () {
    $(".navbar").toggleClass('navbar--visible');
    $("body").toggleClass("hidden");
    
  };
 
}); 