//? premitive
String
Number
Boolean

undefined
null

BigInt
Symbol

//? non-premitive 
Object
String
Array

//? CallBack
// function sayHello(sayHi) {
//     sayHi("Ibrohim")
// }


// sayHello(function (name) {
//     console.log("This is CallBack function  ", name);
// });

//? Object and this

// const user = {
//     name: "Ogabek",
//     surname: "Sodiqov",
//     age: 19,
//     city: "Kokand",
//     study: "FarDu",
//     fullname() {
//         return `${this.name} ${this.surname}`
//     }
// }

// console.log(user.fullname());


// //! add property
// user.work = "Amerika"
// user["willage"] = "Boytuman"
// console.log(user);


// user.age = 22
// console.log(user);

// //! Delete Property
// delete user.name;
// console.log(user); 


//? Getter and  Setter 

// const user = {
//     name: "Ogabek",
//     surname: "Sodiqov",
//     age: 19,
//     city: "Kokand",
//     study: "FarDu",
//     get fullname() {
//         return `${this.name} ${this.surname}`
//     },
//     set editName(newName) {
//         this.name = newName
//     }
// }

// console.log(user.fullname);
// user.editName = "Ogabekkk"
// console.log(user);

//? IIFE = Immediately Invoked Function Expression
// (function () {
//     console.log("salom Ogabek");
// }()) 

//? Array Methods

const users = [];
const nums = [];

// users[users.length] = "Sardor"
// users[users.length] = "Ogabek"


// const returnPush = users.push("Ahmadxon", "Xondamir")
// console.log(returnPush);
// const returnPop = users.pop() // O`chirilgan malumotni korsatadi

// console.log(returnPop);
// console.log(users);

users.unshift("Hellobek") // Arrayga boshidan qoshadi
users.unshift("Ogabek") // Arrayga boshidan qoshadi
users.shift()  // Arrayni boshidan ayiradi
console.log(users);


