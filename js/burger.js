const burgerMenu = document.querySelector('#burger');
const navheader = document.querySelector(".nav-header");

burgerMenu.addEventListener("click", () => {
    navheader.classList.toggle("opennav");
    event.stopPropagation();
});

document.addEventListener("click", () => {
    if (navheader.classList.contains("opennav")) {
        navheader.classList.remove("opennav");
    }
});