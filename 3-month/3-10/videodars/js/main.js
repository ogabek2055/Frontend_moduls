


const users = [
    "Abbos",
    "ezoza",
    "Sherbek",
    "Diana",
    "Sherbek",
    "Diana"
]


//? Map()


const newUsers = users.map((user) => {
    return "Hello " + user;
})
console.log(users);
console.log(newUsers);



// function myForEach(cb, arr) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         const filtered = cb(arr[i], i, arr)
//         if (filtered) {
//             result.push(arr[i]);
//         }
//     }
//     return result
// }


// const isFound = myForEach((user, index, array) => {
//     return user == "Diana"
// }, users)


// console.log(isFound);




// users.forEach((user, index, array) => {
//     const parentEl = document.querySelector("#users")

//     const item = `<li>${user}</li>`

//     parentEl.innerHTML += item;
// })

// for (let i = 0; i < users.length; i++) {
//     console.log(`User: ${users[i]}`);
// }



// function myForEach(cb, arr) {
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i], i, arr)
//     }
// }

// myForEach((user, index, array) => {
//     console.log(user, index, array);
// }, users)


