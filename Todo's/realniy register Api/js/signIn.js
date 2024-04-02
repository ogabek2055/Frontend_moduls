const signIn = document.querySelector("#signIn")

signIn.addEventListener("submit", async (event) => {
    event.preventDefault()

    const phone_number = event.target[0].value
    const password = event.target[1].value

    try {
        const response = await fetch("https://2e9e-178-218-201-17.ngrok-free.app/api/v1/employee/login", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                phone_number,
                password,
            }),
        })
        const data = await response.json()
        if (data.token) {
            localStorage.setItem("token", data.token)
            window.location.replace("./index.html")
        } else {
            alert("Token qani !!!!")
        }
    } catch (error) {
        console.log(error);
    }
})