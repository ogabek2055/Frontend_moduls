const signInForm = document.querySelector("#signUpForm")

signUpForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = event.target[0].value
    const password = event.target[1].value
    try {

        const response = await fetch("https://reqres.in/api/register", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                email,
                password,
            })
        });
        const data = await response.json()
        console.log(data);
        if (!data.token) {
            alert("Token yoq!")
        } else {
            localStorage.setItem("token", data.token)
            window.location.replace("/index.html")
        }
    } catch (error) {
        console.log(error);
    }


})