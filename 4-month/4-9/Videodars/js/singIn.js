const signInFrom = document.querySelector("#signInForm");

signInFrom.addEventListener("submit", async (event) => {
	event.preventDefault();

	console.log(event.target);

	const email = event.target[0].value;
	const password = event.target[1].value;

	try {
		const res = await fetch("https://reqres.in/api/login", {
			headers: {
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({
				email,
				password,
			}),
		});

		const data = await res.json();
   if(!data.token) {
    alert("Nmadir xato ketti!")
   } else {
    localStorage.setItem("token", data.token)
    window.location.replace("/index.html")
   }

 } catch (error) {
		console.log(error);
	}
});
