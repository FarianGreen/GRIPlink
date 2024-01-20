const menu = document.querySelector('.header__nav-menu');
const menuBurger = document.querySelector('.header__nav-burger');

menuBurger.addEventListener('click', () => {
  menu.classList.toggle('header__nav-menu--active');
  menuBurger.classList.toggle('header__nav-burger--active');
});
