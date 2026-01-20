// Seleciona o botão e o menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
// Seleciona todos os links dentro do menu mobile
const mobileLinks = document.querySelectorAll('.mobile-link');

// 1. Abre e fecha o menu ao clicar no botão hambúrguer
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// 2. Fecha o menu automaticamente ao clicar em qualquer link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});