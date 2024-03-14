// ? Higher order functions => map, filter, sort, reduce, some, every

// ? map => [1,2,3].map(x => x*2) -> [2,4,6]

// const numbers = [1,2,3].map((x) => x * 2);

// console.log(numbers);

// ? Arrow function
// const arrFunc = x => x * 2;

// ? filter => [1,2,3,4,5,6].filter(n => n % 2 === 0) -> [2,4,6]

// const users = [
//     "Oysha",
//     "Jonibek",
//     "GUlom",
//     "Durmujan",
//     "Saparmurat",
//     "Maruf",
//     "Ezoz",
// ];

// const filteredUsers = users.filter((user) => {
//     return user.length > 5;
// });
// console.log(filteredUsers);

// ? sort => [1,3,2].sort() -> [1,2,3] => sonlarni osish yoki kamayish tartibda chiqarib beradi

// const number = [6,12,34,1,5,7,4,2,11,23,98];

// const filteredNums = number.sort((a,b) => a-b); osish
// const filteredNums = number.sort((a,b) => b - a); kamayish

// console.log(filteredNums);

//* some => bazi

// const fruits = [
//     "pineapple",
//     "apricot",
//     "kiwi",
//     "banana",
//     "watermelon",
//     "apple",
//     "orange",
//     "melon",
// ];

// const someBanana = fruits.some((fruit) => fruit ==="banana")
// console.log(someBanana);

// * every => har biri

const fruits = [
    "pineapple",
    "apricot",
    "kiwi",
    "banana",
    "watermelon",
    "apple",
    "orange",
    "melon",
];

// const someBanana = fruits.every((fruit) => fruit ==="banana")
// console.log(someBanana);

// const filteredFruits = fruits.sort().reverse();
// console.log(filteredFruits);

// ? reduce  => sonlarni bir birga qoshib yegindini chiqarib beradi

// const Array = Array.reduce(
//     (x,y) => x + y
// );
//  console.log(res); //15

// ? String methods
// console.log(new String("hsddgud"));

// ? trim probilani ob tashidi faqat 2 ta yondegini
// const username = "      hgdydfjsiduicjsdu"
// console.log(username.trim())

// ? slice 
// const usernsme = "Ibrohim"
// console.log(username.slice(2));

// ? substring sozni berilgan joyidan harfni olib beradi
// const username = "Ibrohim";
// console.log(username.substring(3,6));

// ? toUpperCase() toLOwerCase() sozni KOtta vs Kichik qb beradi
// const username = "Ibrohim"
// console.log(username.toUpperCase()); //IBROHIM
// console.log(username.toLowerCase()); //ibrohim

// ? length index korsatadi
// const username = "Ibrohim";
// .console.log(username.length);

// ?ChatAt()

// const username = "Ibrohim";
// .console.log(username.charAt(0));

// ? Contact() sozni bir birga qoshib beradi
// const username = "Ibrohim";
// .console.log(username.contact(" teacher")); //username + " teacher"


// ? CSS in javaScript

// const titleEl = document.querySelector("#title")

// function changeColor(){
//     titleEl.style.color = "red";
// }

const btn = document.querySelector("#colorChangerBtn")
btn.onclick = changeColor
btn.addEventListener('click', changeColor)




