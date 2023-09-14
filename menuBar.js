const menuIcon = document.getElementById('menu-icon');
const menuBar = document.getElementById('menu__bar');
const btnFechar = document.getElementById('close-btn');

menuIcon.addEventListener('click', () => {
    menuBar.style.top = '0';
    menuBar.style.transition = '.3s';
});

btnFechar.addEventListener('click', () => {
    menuBar.style.top = '-100%';
})