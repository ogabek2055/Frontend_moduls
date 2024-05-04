const signUp = document.querySelector("#signUp");
const signIn = document.querySelector("#signIn");
const insEl = document.querySelectorAll("#ins");

insEl.forEach(element => {
    element.addEventListener("click", () => {
        signIn.classList.toggle("show")
        signUp.classList.toggle("show")
    })
})