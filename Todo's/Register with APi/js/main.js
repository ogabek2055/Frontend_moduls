
const logOut = document.querySelector("#logOut")
const token = localStorage.getItem("token")


logOut.addEventListener("click", () => {
 localStorage.removeItem("token")
 window.location.reload()
})


if (!token) {
    window.location.replace("/signIn.html")
}