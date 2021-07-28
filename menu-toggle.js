const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

const mediaQueryMobile = window.matchMedia('(min-width: 320px) and (max-width: 425px)')

const mobileMenu = document.getElementsByClassName("burger-input");
const nav = document.getElementsByClassName("navbar-left");
const mobileSub = document.getElementsByClassName("dropdown");
const subNav = document.getElementsByClassName("inside-menu");

function handleScreenResize(e){
    if(e.matches){
        mobileMenu.addEventListener('click', () => {
            nav.classList.toggle("menuToggle");
        });
        mobileSub.addEventListener('click', () => {
            subNav.classList.toggle("subMenuShow");
        });
    } else {
        mobileMenu.removeEventListener();
        subNav.removeEventListener();
    }
}

mediaQueryMobile.addListener(handleScreenResize)

handleScreenResize(mediaQueryMobile);