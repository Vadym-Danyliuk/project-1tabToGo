const openMenuBtn = document.getElementById('open-menu');
const closeMenuBtn = document.getElementById('close-menu');
const menuOverlay = document.querySelector('.open-navbar-menu-overlay');

openMenuBtn.addEventListener('click', () => {
  menuOverlay.classList.add('is-open');
});

closeMenuBtn.addEventListener('click', () => {
  menuOverlay.classList.remove('is-open');
});
