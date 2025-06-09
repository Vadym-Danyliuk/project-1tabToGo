// Отримуємо елементи
const openMenuBtn = document.getElementById('open-menu');
const closeMenuBtn = document.getElementById('close-menu');
const menuOverlay = document.querySelector('.open-navbar-menu-overlay');
const buyNowBtn = document.getElementById('buy-now');
const supportSection = document.getElementById('support');

openMenuBtn.addEventListener('click', () => {
    menuOverlay.classList.add('is-open');
});

closeMenuBtn.addEventListener('click', () => {
    menuOverlay.classList.remove('is-open');
});

const menuLinks = menuOverlay.querySelectorAll('a');

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuOverlay.classList.remove('is-open');
    });
});

if (buyNowBtn && supportSection) {
    buyNowBtn.addEventListener('click', (e) => {
        e.preventDefault(); 
        
        // Плавний скрол до секції
        supportSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
        menuOverlay.classList.remove('is-open');
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOverlay.classList.contains('is-open')) {
        menuOverlay.classList.remove('is-open');
    }
});
