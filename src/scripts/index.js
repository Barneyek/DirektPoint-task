import '../styles/index.scss';
import { tns } from "../.././node_modules/tiny-slider/src/tiny-slider";

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
};

const showAllCircles = () => {
  var $circles = $(".circle-pin");
  $circles.each(function () {
    this.style.opacity = "1";
  });
};


$(document).ready(function () {

  navSlide();
  var slider = tns({
    container: '.attractions__slider',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    navItems: false,
    controlsContainer: ".attractions__controls",
    // responsive: {
    //   768: {
    //     items: 2,
    //     width: '1024px'
    //   }
    // }
  });

  var $circles = $(".circle-pin");

  $circles.each(function () {
    var circle = $(this);
    circle.fadeOut(200, function () {
      const maxLeft = window.innerWidth - circle.width();
      const maxTop = window.innerHeight - circle.height();
        var leftPos = Math.floor(Math.random() * 870);
        var topPos = Math.floor(Math.random() * 420);
        circle.css({
          left: leftPos + 90,
          top: topPos + 160,
          opacity: 1
        }).fadeIn(100);
    });
  });

  $(".tour__item").on("click", function () {
    var catColor = this.className.replace('tour__item', '');
    showAllCircles();
    $circles.each(function () {
      var circleColor = this.className;
      circleColor = this.className.replace('circle-pin', '');
      if (catColor !== circleColor) {
        this.style.opacity = "0";
      }
    });
  });

  // document.getElementById("all").addEventListener('click', () => {
  //   showAllCircles();
  // });
});
