const navbarNav = document.querySelector('.navbar-nav');
const hamburger = document.querySelector('.hamburger');
const linkHamburger = document.querySelector('#hamburger a');
const search = document.querySelector('.search');
const searchForm = document.querySelector('.search-form');
const shoppingCartContainer = document.querySelector('.shopping-cart');
const shoppingBtn = document.querySelector('.btn-shopping');

search.addEventListener('click', function (e) {
    e.preventDefault();
    searchForm.classList.toggle('active');
});

hamburger.addEventListener('click', function (e) {
    e.preventDefault();
    navbarNav.classList.toggle('active');
});

shoppingBtn.addEventListener('click', function (e) {
    e.preventDefault();
    shoppingCartContainer.classList.toggle('active');
});


// klik di luar sidebar untuk menghilangkan nav dan search
document.addEventListener('click', function (e) {
    if (!linkHamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if (!search.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    if (!shoppingBtn.contains(e.target) && !shoppingCartContainer.contains(e.target)) {
        shoppingCartContainer.classList.remove('active');
    }
});


