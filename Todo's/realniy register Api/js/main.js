const logOut = document.querySelector("#logOut")
const token = localStorage.getItem("token")

if(!token) {
    window.location.replace("./signIn.html")
}


logOut.addEventListener("click", () => {
    localStorage.removeItem("token")
    window.location.reload()
})