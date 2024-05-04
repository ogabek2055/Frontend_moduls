const signUpFrom = document.querySelector("#signUpFrom")
const signInFrom = document.querySelector("#signInFrom")

const ins = document.querySelectorAll("#ins")

ins.forEach(element => {
    element.addEventListener("click", () => {
        signUpFrom.classList.toggle("show")
        signInFrom.classList.toggle("show")
    })
})


signUpFrom.addEventListener("submit", (event) => {
    event.preventDefault()

    const fullname = event.target[0].value
    const phone_number = event.target[1].value
    const password = event.target[2].value

    fetch("https://joil.onrender.com/api/v1/employee", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
            fullname,
            phone_number,
            password,
        })

    }).then(data => data.json()).then(data => {
        localStorage.setItem("token", data.token)
        if (data.token) {
            window.location.replace("./index.html")

        }

    }).catch(err => {
        console.log(err);
    })
})

signInFrom.addEventListener("submit", async (event) => {
    event.preventDefault()

    const phone_number = event.target[0].value
    const password = event.target[1].value

    try {
        const response = await fetch("https://joil.onrender.com/api/v1/employee/login", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                phone_number,
                password,
            })
        })
        const data = await response.json()
        localStorage.setItem("token", data.token)
        if (data.token) {
            window.location.replace("./index.html")

        }
    } catch (error) {
        console.log(error);
    }
})
