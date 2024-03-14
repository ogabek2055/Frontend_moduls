const btnEl = document.querySelector("#btn");
const carsSelect = document.querySelector("#cars")

carsSelect.addEventListener("change", () => {
    console.log(carsSelect.value);
})
    
const usernameInput = documnet.querySelector("#usernameInput");

usernameInput.addEventListener("change", () => {
    console.log(usernameInput.value);
})

btnEl.addEventListener("click", () => { 
    console.log(usernameInput.value);
})

// ? event bubbling vs capturing

document.querySelector("#parent").addEventListener("click", () =>{
    alert("Parent was clicked!",true)
});

document.querySelector("#child").addEventListener("click", () =>{
    // e.stopPropagation()
    alert("Child was clicked!",true)
});

// ? classes in js

const navList = document.querySelector(".navList")
const titleEL = document.querySelector(".title");
const btnAdd = document.querySelector("#btn_add");
const btnRemove = document.querySelector("#btn_remove");
const btnToggle = document.querySelector("#btn_toggle");

btnAdd.addEventListener("click", () => {
    titleEL.classList.add("red")
})

btnRemove.addEventListener('click', () => {
    titleEL.classList.remove("red")
})

btnToggle.addEventListener("click", () => {
    navList.classList.toggle("open")
})

