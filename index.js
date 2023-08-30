window.addEventListener("scroll", function() {
    var banner = document.querySelector(".banner-navbar");
    banner.classList.toggle("scrolled", window.scrollY > 0);
    banner.querySelector('h1').style.color = "white"
    if(window.screen.width > 760){
      banner.querySelector('h1').style.color = "black"
    }
    if(window.scrollY <= 0){
      banner.querySelector('h1').style.color = "white"
    }
});


$(document).ready(function() {
  var slideCount = $('.slider .slides img').length;
  var slideWidth = $('.slider').width();
  var slideIndex = 0;

  // Set initial position and width
  $('.slider .slides').css('transform', 'translateX(' + (-slideWidth * slideIndex) + 'px)');
  $('.slider .slides').css('width', (slideWidth * slideCount) + 'px');

  // Automatic sliding
  setInterval(function() {
    slideIndex = (slideIndex + 1) % slideCount;
    $('.slider .slides').css('transform', 'translateX(' + (-slideWidth * slideIndex) + 'px)');
  }, 3000);
});

