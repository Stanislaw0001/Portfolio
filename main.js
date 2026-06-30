/************************************************** MOUSE *************************************************/

document.addEventListener("mousemove", (e) => {
    const x = e.clientX + 'px'
    const y = e.clientY + 'px'
    document.documentElement.style.setProperty('--mouse-x', x)
    document.documentElement.style.setProperty('--mouse-y', y)
});


const burgerMenuButton = document.querySelector('.burger-menu');
const burgerCloseButton = document.querySelector('.burger-close');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-nav-link');
const body = document.body;
const desktopThemeToggle = document.getElementById('theme-toggle-desktop');
const mobileThemeToggle = document.getElementById('theme-toggle-mobile');

/************************************************** MOBILE MENU *************************************************/

function setMobileMenuState(isOpen) {
    mobileMenu.classList.toggle('is-open', isOpen);
    burgerMenuButton.classList.toggle('is-active', isOpen);
    burgerCloseButton.classList.toggle('is-active', isOpen);
    body.classList.toggle('menu-open', isOpen);
    burgerMenuButton.setAttribute('aria-expanded', String(isOpen));
    burgerCloseButton.setAttribute('aria-expanded', String(isOpen));
}

function toggleMobileMenu() {
    setMobileMenuState(!mobileMenu.classList.contains('is-open'));
}

burgerMenuButton.addEventListener('click', toggleMobileMenu);
burgerCloseButton.addEventListener('click', toggleMobileMenu);

mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
        setMobileMenuState(false);
    });
});

/************************************************************* TOGGLE BUTTON *********************************************/

function applyTheme(isLight) {
    body.classList.toggle('light-theme', isLight);
    desktopThemeToggle.checked = isLight;
    mobileThemeToggle.checked = isLight;
}

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'light') {
    applyTheme(true);
} else {
    applyTheme(false);
}

[desktopThemeToggle, mobileThemeToggle].forEach((toggle) => {
    toggle.addEventListener('change', () => {
        const isLight = toggle.checked;
        applyTheme(isLight);
        localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
    });
});