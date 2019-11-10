import '../styles/index.scss';

const navSlide = () => {
  const navBurger = document.querySelector('.nav-burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  navBurger.addEventListener('click', () => {
    nav.classList.toggle('nav-links--open');
    navLinks.forEach(link => {
      link.classList.toggle("fade");
    });
  });
}

$(document).ready(function () {

  navSlide();
  var $circles = $(".circle-pin");
  var resolutions = [ // list of window.matchMedia() queries
    window.matchMedia("(max-width: 480px)"),
    window.matchMedia("(max-width: 768px)"),
    window.matchMedia("(max-width: 991px)"),
    window.matchMedia("(max-width: 1200px)"),
    window.matchMedia("(min-width: 1201px)")
  ]

  $circles.each(function () {
    var circle = $(this);
    circle.fadeOut(200, function () {
      const maxLeft = window.innerWidth - circle.width();
      const maxTop = window.innerHeight - circle.height();
      var leftPos = Math.floor(Math.random() * (maxLeft - 200))
      var topPos = Math.floor(Math.random() * (maxTop - 16980));

      if (resolutions[0].matches) {
        var leftPos = Math.floor(Math.random() * (maxLeft - 200))
        var topPos = Math.floor(Math.random() * (maxTop - 16980));
        circle.css({
          left: leftPos + 100,
          top: topPos + 11110,
          opacity: 1
        }).fadeIn(100);
      }
      if (resolutions[1].matches) {
        var leftPos = Math.floor(Math.random() * (maxLeft - 900))
        var topPos = Math.floor(Math.random() * (maxTop - 380));
        circle.css({
          left: leftPos + 100,
          top: topPos + 100,
          opacity: 1
        }).fadeIn(100);
      }
      if (resolutions[2].matches) {
        var leftPos = Math.floor(Math.random() * (maxLeft - 200))
        var topPos = Math.floor(Math.random() * (maxTop - 870));
        circle.css({
          left: leftPos + 100,
          top: topPos + 50,
          opacity: 1
        }).fadeIn(100);
      }
      if (resolutions[3].matches) {
        var leftPos = Math.floor(Math.random() * (maxLeft - 200))
        var topPos = Math.floor(Math.random() * (maxTop - 820));
        circle.css({
          left: leftPos + 100,
          top: topPos + 180,
          opacity: 1
        }).fadeIn(100);
      }
      if (resolutions[4].matches) {
        var leftPos = Math.floor(Math.random() * 1100);
        var topPos = Math.floor(Math.random() * 480);
        circle.css({
          left: leftPos + 50,
          top: topPos + 200,
          opacity: 1
        }).fadeIn(100);
      }
    });
  });

  $(".tour__item").on("click", function () {
    var catColor = this.className.replace('tour__item', '');
    $circles.each(function () {
      var circleColor = this.className;
      circleColor = this.className.replace('circle-pin', '');
      if (catColor !== circleColor) {
        this.style.opacity = "0";
      }
    });
  });
});
