const mobileMenu = document.getElementById('mobile-menu');
const nav = document.getElementById('navbar');

mobileMenu.addEventListener('click', () => {
    nav.classList.toggle('active');
    mobileMenu.classList.toggle('active'); // hamburger animasyonu için
});
