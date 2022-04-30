'use strict'

//scroll 내리면 Nav_menu 배경색 바꾸기.
const navbar = document.querySelector('#Header');
const navbarHight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    if (navbarHight < window.scrollY) {
        navbar.classList.add('navbar_dark');
    } else {
        navbar.classList.remove('navbar_dark');
    }
});

//Nav_meun를 클릭하면 해당하는 section으로 스크롤 이동.
const navbar_menu = document.querySelector('.Nav_menu');

navbar_menu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    const active = document.querySelector('.Nav_menu_item.active');
    if (link == null) {
        return;
    }

    active.classList.remove('active');
    target.classList.add('active');

    scrollIntoView(link);
    navbar_menu.classList.remove('open'); //navbar가 펼쳐진 싱태에서 클릭해 이동하면 class open remove.
});


//conatct me 버튼을 클릭하면 Contact 페이지로 scroll.
const button = document.querySelector('.Contact_me');

// const Contact_me_section = document.querySelector('#Contact'); //()안에 # 을 쓰면 안 된다.
button.addEventListener('click', () => {
    scrollIntoView('#Contact');
});


//scroll정도에 따른 home의 투명도 조절.
const home = document.querySelector('.Profile_container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

//arrow up button.
const arrow_up_btn = document.querySelector('.Arrow_up_btn');
// document.addEventListener('scroll', () => {
//     arrow_up_btn.style.opacity = 0 + window.scrollY/homeHeight;
// });
// arrow_up_btn.addEventListener('click', () => {
//     scrollIntoView('#Profile');
// });

document.addEventListener('scroll', () => {
    if (homeHeight < window.scrollY) {
        arrow_up_btn.classList.add('visible');
    } else {
        arrow_up_btn.classList.remove('visible');
    }
});

arrow_up_btn.addEventListener('click', () => {
    scrollIntoView('#Profile');
});


//work
const Projects = document.querySelector('.Projects'); //전체 프로젝트
const Project_btns = document.querySelector('.Projects_btns') //버튼 뭉치
const Project = document.querySelectorAll('.Project'); //각각의 프로젝트들이 들어 있는 배열


Project_btns.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }


    Project_btns.addEventListener('click', (e) => {
        const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
        if (filter == null) {
            return;
        }
    });


    const active = document.querySelector('.Projects_btn.selected');
    const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;

    active.classList.remove('selected');
    target.classList.add('selected');

    Projects.classList.add('anim_out');
    // setTimeout(() => {
    //     Project.forEach((project) => {
    //         if (filter === '*' || filter === project.dataset.type) {
    //             project.classList.remove('invisible');
    //         } else {
    //             project.classList.add('invisible');
    //         }
    //     });
    //     Projects.classList.remove('anim_out');
    // }, 500);
    setTimeout(() => {
        Project.forEach((project) => {
            if (filter === '*' || filter === project.dataset.type) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        });
        Projects.classList.remove('anim_out');
    }, 300);
});



//toggle btn 클릭하면 Navbar 밑으로 펼쳐지기.
//클릭하면 냇바가 내려와야함 그러면 플랙스 컬럼이 돼야하고 그러려면 클래스를 추가해줘야함
//.Nav_menu에 display none을 block 로 바꿔야함 nav_menu height: 291px
const toggle_btn = document.querySelector('.Header_toggle_btn');


toggle_btn.addEventListener('click', () => {
    navbar_menu.classList.toggle('open');
});











function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
}