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
    items: 2,
    margin: 10,
    nav: true,
    dots: true,
    loop: true,
    responsive: {
      1024: {
        items: 3,
        nav: false,
      },
      1280: {
        items: 4,
        nav: false,
      },
    },
  });
});
