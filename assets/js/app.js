const header = document.querySelector('header');
const headerWrapper =document.querySelector('.header-wrapper');

window.addEventListener("scroll", () => {
  header.classList.toggle('sticky', window.scrollY > 60);
  headerWrapper.classList.toggle('sticky-wrapper', window.scrollY > 60);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};