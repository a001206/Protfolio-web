'use strict'

//navbar 올라가면 투명 내령면 색.
const navbar = document.querySelector('#Header');
const navbarHight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log(`navbarHeight: ${navbarHight}`);
    if(navbarHight < window.scrollY){
        navbar.classList.add('navbar_dark');
    }else {
        navbar.classList.remove('navbar_dark');
    }
});