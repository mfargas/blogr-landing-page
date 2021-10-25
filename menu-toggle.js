const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

const mediaQueryMobile = window.matchMedia('(max-width: 425px)')

const mobileMenu = document.querySelector(".burger-input");
const nav = document.querySelector(".navbar-left");
let mobileSub = document.getElementsByClassName("dropdown");
let subNav = document.getElementsByClassName("inside-menu");

function handleScreenResize(e){
    if(e.matches){
        mobileMenu.addEventListener('click', () => {
            nav.classList.toggle("menuToggle");
        });
        for(let i = 0 ; i < mobileSub.length; i++){
            let childEl = mobileSub[i];
            let matchingSub = subNav[i]
            childEl.addEventListener('click', () => {
                matchingSub.style.display = matchingSub.style.display == 'none' ? 'table' : 'none';
        })}
    }
}

mediaQueryMobile.addListener(handleScreenResize)

handleScreenResize(mediaQueryMobile);