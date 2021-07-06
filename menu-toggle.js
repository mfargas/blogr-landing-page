const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

const mobileMenu = document.getElementsByClassName("burger");
const nav = document.getElementsByClassName("navbar-left");
const mobileSub = document.getElementsByClassName("nav-toggle-link");
const subNav = document.getElementsByClassName("inside-menu");


    if(width < 500){
        mobileMenu.addEventListener('click', function () {
            nav.classList.toggle("menuToggle");
        });
        mobileSub.addEventListener('click', function () {
        subNav.classList.toggle("subMenuShow");
        })
    } else {
        mobileSub.addEventListener('click', function () {
            subNav.classList.toggle("subMenuShow");
        })
    }

