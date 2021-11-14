// Toggle Mobile Search Bar

const searchBar = document.getElementById("mobileSearchSection");
const searchToggle = document.getElementById("openSearch");

function toggleSearchBar() {

    if (searchBar.style.position === '') {

        searchBar.style.position = 'static';

    } else {

        searchBar.style.position = '';

    };
    
};

searchToggle.addEventListener('click', toggleSearchBar);


// Toggle Side Menu

const menu = document.getElementById("menu");
const menuToggle = document.getElementById("menuButton");

function toggleMenu() {

    if (menu.style.left === '') {

        menu.style.left = '0';

    } else {

        menu.style.left = '';

    };

};

menuToggle.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenu);