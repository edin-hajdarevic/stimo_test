const menu = document.querySelector("#menu-container");
const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");

openMenu.addEventListener("click", () => {
    menu.style.transition = "all .4s ease";
    menu.style.opacity = 1;
    menu.style.pointerEvents = "auto";
    menu.style.transform = "translateX(0%)";
    menu.style.zIndex = 10;
});

closeMenu.addEventListener("click", () => {
    menu.style.opacity = 0;
    menu.style.pointerEvents = "none";
    menu.style.transform = "translateX(40%)";
    menu.style.zIndex = 0;
})