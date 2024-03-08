// const users = [
//     "Ogabek",
//     "Ahmadxon",
//     "Diana",
//     "Xondamir",
//     "Isroil",

// ]
// const newArr = [];
// function myForEach(cb, arr) {
//     for (let i = 0; i < arr.length; i++) {
//         const callback = cb(arr[i], i, arr)

//     }
//     console.log(newArr);
// }

// const isFound = myForEach((user, index, array) => {
//     return user == "Diana";
// }, arr)

// console.log(isFound);


//? Map() 
// function myMap(cb, arr) {
//     newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         const newItem = cb(arr[i], i, arr)
//         if (newItem) {
//             newArray.push(newItem);
//         }
//     }
//     console.log(users);
//     console.log(newArray);
// }

// myMap((user) => {
//     return "Hello " + user;
// }, users)


//? filter()

const users = [
    { name: "Ogabek", age: 33 },
    { name: "www", age: 23 },
    { name: "Owbek", age: 15 },
    { name: "Oweabek", age: 14 },
    { name: "Ogawfebek", age: 13 },
    { name: "Ogabefk", age: 18 },
    { name: "Ogabwefewfwek", age: 22 },
]

// function myFilter(cb, arr) {
//     let filteredArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         const filtered = cb(arr[i], i, arr)
//         if (filtered) {
//             filteredArr.push(arr[i])
//         }
//     }
//     console.log(filteredArr);
// }

// myFilter((user, index, arr) => {
//     return user.name == "www"
// }, users)


//? every()

//? some()

// users.some((user) => {
//     console.log(user);
// })

// function mySome(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i],);
//     }
// }

// mySome(users)

//?  