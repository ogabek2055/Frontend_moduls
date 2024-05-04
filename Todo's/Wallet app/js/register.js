const insEl = document.querySelectorAll("#ins")
const signUp = document.querySelector("#signUp")
const signIn = document.querySelector("#signIn")
insEl.forEach(ins => {
    ins.addEventListener("click", () => {
        signUp.classList.toggle("show")
        signIn.classList.toggle("show")
    })
})

//! Register 
signUp.addEventListener("submit", async (event) => {
    event.preventDefault()
    const username = event.target[0].value
    const password = event.target[1].value
    console.log(username);

    try {
        const response = await fetch("https://todo-for-n92.cyclic.app/user/register",
            {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    username,
                    password
                })
            })
        const data = await response.json()
        console.log(data);
        if (data.token) {
            localStorage.setItem("token", data.token)
            window.location.replace("./index.html")
        }
        alert(data.message)
    } catch (error) {
        console.log(error);
    }
})

//! Log in 
signIn.addEventListener("submit", async (event) => {
    event.preventDefault()
    const username = event.target[0].value
    const password = event.target[1].value
    console.log(username);

    try {
        const response = await fetch("https://todo-for-n92.cyclic.app/user/login",
            {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({
                    username,
                    password
                })
            })
        const data = await response.json()
        console.log(data);
        if (data.token) {
            localStorage.setItem("token", data.token)
            window.location.replace("./index.html")
        }
        alert(data.message)
    } catch (error) {
        console.log(error);
    }
})
