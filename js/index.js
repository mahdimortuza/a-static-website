const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navIcons = document.querySelector('.nav-icons');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');
  navIcons.classList.toggle('nav-active');
});
