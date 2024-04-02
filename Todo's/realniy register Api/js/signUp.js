const signUp = document.querySelector("#signUp")

signUp.addEventListener("submit", async (event) => {
    event.preventDefault()

    const fullname = event.target[0].value
    const phone_number = event.target[1].value
    const password = event.target[2].value

    try {
        const response = await fetch("https://2e9e-178-218-201-17.ngrok-free.app/api/v1/employee", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
                fullname,
                phone_number,
                password,
                employerId: "gngnhgnbgnghmgnhgngnhghngngnhgnhgnhgnh"
            }),
        })
        const data = await response.json()
        console.log(data.token);
        localStorage.setItem("token", data.token)
        window.location.replace("./index.html")
    } catch (error) {
        console.log(error);
     }
})