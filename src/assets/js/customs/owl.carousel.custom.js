$(document).ready(function () {
  $("#main-carousel").owlCarousel({
    items: 1,
    nav: true,
    dots: true,
    loop: true,
  });

  $("#person-carousel").owlCarousel({
    items: 1,
    nav: true,
    dots: true,
    loop: true,
  });

  $("#events-carousel").owlCarousel({
    items: 4,
    margin:10,
    nav: true,
    dots: true,
    loop: true,
  });


});
