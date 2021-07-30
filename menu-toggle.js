const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

const mediaQueryMobile = window.matchMedia('(max-width: 425px)')

const mobileMenu = document.querySelector(".burger-input");
const nav = document.querySelector(".navbar-left");
const mobileSub = document.querySelector(".dropdown");
const subNav = document.querySelector(".inside-menu");

function handleScreenResize(e){
    if(e.matches){
        mobileMenu.addEventListener('click', () => {
            nav.classList.toggle("menuToggle");
        });
        mobileSub.addEventListener('click', () => {
            subNav.classList.toggle("subMenuShow");
        });
    } 
}

mediaQueryMobile.addListener(handleScreenResize)

handleScreenResize(mediaQueryMobile);