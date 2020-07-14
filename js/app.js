//----------------------
// Menu slide in and out
//----------------------

const menuIcon = document.getElementById("menuIcon");
const mainNav = document.querySelector(".main-nav");
const closeBtn = document.querySelector(".closebtn");
const menu = document.getElementById("myNav");
const links = document.querySelector(".overlay-content");

menuIcon.addEventListener('click', () => { // on click of menu icon hide the main-nav background and icon
    menuIcon.style.display = "none";
    mainNav.style.backgroundColor = "transparent";
    mainNav.style.transition = "all 1s";
    menu.style.width = "100%";
    menu.style.transition = "all .8s";
});

function menuHide(callback) {  // function for the menu overlay behaviour
    menuIcon.style.display = "block";
    mainNav.style.transition = "all 1s";
    menu.style.width = "0";
    menu.style.transition = "all .8s";
}

closeBtn.addEventListener('click', () => { // on click of close button, show main-nav and menu button
    menuHide();
});

links.addEventListener('click', () => { // on click of links, show main-nav and menu button
    menuHide();
});