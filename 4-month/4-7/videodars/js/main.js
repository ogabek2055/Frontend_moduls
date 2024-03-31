//? try catch
// try {
//     const user = "Palonchi";
//     console.log(username);
// } catch (error) {
//     console.log(error);
// }

// console.log("Hello"); 

//? Promise

// function getUsername() {
//     return new Promise((resolve, reject) => {
//         const username = "Bobur"
//         if (!username) {
//             reject(Error("No"))
//         } else {
//             resolve(username)
//         }
//     })
// }

// getUsername().then((data) => {
//     alert(data + "🙄")
// }).catch(error => {
//     console.log(error);
// })

//? fetch()
//? Promisa steps 1. Pending 2. Fulfilled/Rejected

// fetch("https://jsonplaceholder.typicode.com/photos").then(data => {
//     return data.json()
// }).then(photos => {
//     console.log(photos);
// }).catch(error => {
//     console.log(error);
// }).finally(() => {
//     console.log("response resieved");
// })

// async await

async function getPhotos() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos")
        console.log(response);
        const photos = await response.json()
        console.log(photos);
    } catch (error) {
        console.log(error);
    }
}

getPhotos()