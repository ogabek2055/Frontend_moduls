

// fetch("https://jsonplaceholder.typicode.com/users").then((data) => {
//     return data.json()
// }).then((users) => {
//     console.log(users);
// })

//? async await 

async function getPhotos() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await response.json()
        return users;
    } catch (error) {
        console.log(error);
    }
}

render(getPhotos())

async function render(users) {
    const data = await users;
    console.log(data);
    const card = document.querySelector(".card")
    card.innerHTML = ""
    for (let i = 0; i < data.length; i++) {
        const temp = `
       <ul>
       <li>Name: ${data[i].name}</li>
       <li>Username:${data[i].username}</li>
       <li>Address:${data[i].address}</li>
       <li>Email:${data[i].email}</li>
       </ul>
       <hr>
       `
        card.innerHTML += temp;
    }
}


