//? For in VS for of

//!  for in
const user = {
    username: "Hellobek",
    age: 40,
}


// for (let key in user) {
//     console.log(key, user[key]);
// }


// if("username" in user) {
//     console.log(true);
// }

//! for of

// const fruits = ["Olma", "nok", "behi"]
// for(let meva of fruits) {
//     console.log(meva);
// }

//! Map() vs set
// const fruits = new Map(
//     [
//         [true, "Hello"], 
//         [1, "BObur"]
//     ]
// )

// const key = ["Apple"]
// fruits.set(false, "Apple")
// fruits.set(1, true)
// fruits.set(key, "banana")

// // get Apple
// console.log(fruits.get((key)));

//! RegEx
// const regex = /kello/i;
// const password = "Palonch#40";

// const passwordRegEx =  /^(.+)@(\S+) $./

// console.log(passwordRegEx.test(password));



//! Amaliyot
// const number = document.querySelector("#number")
// let numArr = []

// function addNumber() {
//     let number = +prompt("Enter any number...")
//     numbers = {
//         number,
//     }
//     numArr.push(numbers)
//     console.log(numArr);
//     render(numArr)
// }


// function render(array) {
//     let newNum = []
//     for (let i = 0; i < array.length; i++) {
//         const dblNum = array[i].number
//         for (let j = i + 1; j < array.length; j++) {
//             if (dblNum == array[j].number) {
//                 newNum.push(array[i])
//             }
//         }
//     }
//     console.log(newNum);
// }

