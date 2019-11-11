import '../styles/index.scss';
import $ from "jquery";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel';

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

  $('.slider').slick({
    centerPadding: '60px',
    dots: true,
    slidesPerRow: 4,
    rows: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesPerRow: 2,
          rows: 1,
        }
      }
    ]

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
    showAllCircles();
    var catColor = this.className.replace('tour__item', '');
    $circles.each(function () {
      var circleColor = this.className;
      circleColor = this.className.replace('circle-pin', '');
      if (catColor !== circleColor) {
        this.style.opacity = "0";
      }
    });
  });

  document.getElementById("all").addEventListener('click', () => {
    showAllCircles();
  });
});
