function toggleMenu() {
    var element = document.querySelector(".navbar-left");
    element.classList.toggle("menuToggle");
}

function dropMenu() {
    var element = document.querySelector(".inside-menu");
    element.classList.toggle("inside-menu-open");
}