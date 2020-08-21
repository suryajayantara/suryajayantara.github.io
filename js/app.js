let btn = document.querySelector("#hamburger_menu");
let nav = document.querySelector("#navbars");
let exit = document.querySelector("#exit");
let side = document.querySelector("#side_nav");
let direction = document.querySelector("#direction");


direction.addEventListener("click",()=>{
    window.open("https://goo.gl/maps/47MA5z19JZXjs6ye7");
});

btn.addEventListener('click',() => {
    nav.classList.remove("hidden");
    nav.classList.add("fixed");
    nav.classList.add("animatedParent");
    nav.classList.remove("nav_menu");
    nav.classList.add("nav-menu-open");
    setInterval(() => {
        side.classList.remove("fadeInLeft");
        side.classList.remove("slowest");
    },100)
});

exit.addEventListener("click",() => {
    nav.classList.add("hidden");
    nav.classList.remove("fixed");
})