'use strict'

//scroll 내리면 Nav_menu 배경색 바꾸기.
const navbar = document.querySelector('#Header');
const navbarHight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if(navbarHight < window.scrollY){
        navbar.classList.add('navbar_dark');
    }else {
        navbar.classList.remove('navbar_dark');
    }
});

//Nav_meun를 클릭하면 해당하는 section으로 스크롤 이동.
const navbar_menu = document.querySelector('.Nav_menu');
navbar_menu.addEventListener('click', (event) =>{
    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }

    scrollIntoView(link);
});

//conatct me 버튼을 클릭하면 Contact 페이지로 scroll.
const button = document.querySelector('.Contact_me');

// const Contact_me_section = document.querySelector('#Contact'); //()안에 # 을 쓰면 안 된다.
button.addEventListener('click', () => {
    scrollIntoView('#Contact');
})


//scroll정도에 따른 home의 투명도 조절.
const home = document.querySelector('.Profile_container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY/homeHeight;
});













function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}