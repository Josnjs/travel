const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 60);
});

const menu = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");

menu.addEventListener("click", () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
});

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navlist.classList.remove("open");
};
