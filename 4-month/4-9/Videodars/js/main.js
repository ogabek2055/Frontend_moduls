// JWT token => JSON web token

// async function getToken() {
// 	const response = await fetch("https://reqres.in/api/register");
// 	const token = await response.json();
// 	console.log(token);
// }

// getToken()



// async function postToken() {
// 	try {
// 		const res = await fetch("https://reqres.in/api/register", {
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			method: "POST",
// 			body: JSON.stringify({
// 				email: "eve.holt@reqres.in",
// 				password: "pistol",
// 			}),
// 		});
// 		const token = await res.json();
// 		localStorage.setItem("token", token.token);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }
// postToken();



const token = localStorage.getItem("token")

if (!token) {
  window.location.replace("/signIn.html")
}
