$(document).ready(function() {
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
  });

  var lastScrolled = 0;
  $(window).scroll(function() {
    var scrolled = $(this).scrollTop();
    if (scrolled - lastScrolled > 50) {
      var navbarHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navbarHeight}, 150);
      lastScrolled = scrolled;
      } else if (lastScrolled - scrolled > 50) {
      $('.navbar').animate({top: '0px'}, 150);
      lastScrolled = scrolled;
      }
  });

});
