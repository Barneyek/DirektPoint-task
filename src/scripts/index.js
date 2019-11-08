import '../styles/index.scss';

const navSlide = () => {
  const navBurger = document.querySelector('.nav-burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  //Toggle nav
  navBurger.addEventListener('click', () => {
    nav.classList.toggle('nav-links--open');
    navLinks.forEach(link => {
      link.classList.toggle("fade");
    });
  });

}

navSlide();