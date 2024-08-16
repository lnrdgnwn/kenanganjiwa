const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('.hamburger');
const linkHamburger = document.querySelector('#hamburger a')

hamburger.addEventListener('click', function (e) {
    e.preventDefault();
    navbarNav.classList.toggle('active');
});

// klik di luar sidebar untuk menghilangkan nav
document.addEventListener('click', function (e) {
    if (!linkHamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});


