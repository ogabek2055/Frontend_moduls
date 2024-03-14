const menuBtn = document.querySelector("#menu__burger")
const navList = document.querySelector(".nav__list")

menuBtn.addEventListener("click", () => {
    navList.classList.toggle("open")
})