document.addEventListener(
  "DOMContentLoaded",
  function() {
    var carousels = bulmaCarousel.attach();
  },
  false
);

$(document).ready(function() {
  $(".navbar-burger").click(function() {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
  var carousels = bulmaCarousel.attach(); // carousels now contains an array of all Carousel instances
});
