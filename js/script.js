// Мобильное меню
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', function() {
        mainNav.classList.toggle('active');
    });
}

// Прокрутка к началу страницы при загрузке
document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0);
});