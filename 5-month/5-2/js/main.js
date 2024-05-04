
// const user = {
//     name: "Ogabek",
//     surname: "Sodiqov",
//     age: 19,
//     fullname() {
//         return this.name + " " + this.surname
//     },

// };

// const user2 = {
//     name: "Toshmat",
//     surname: "Eshmatov",
// };

// const user2Fullname = user.fullname.bind(user2)
// console.log(user2Fullname());


// console.log(user.fullname.bind(user2)());
// console.log(user.fullname.apply(user2));
// console.log(user.fullname.call(user2));


//? Closoure

// function degree(deg) {4
//     // const name = "Ogabek"
//    return function(num) {
//    return deg ** num;

// }
// }

// const square = degree(2)
// const cube = degree(3)
// console.log(square(2));
// console.log(cube(3));



//? IIFE => immidietely invoked function expression = ozini ozi ishlatadigan funksiya
// (function() {
//     alert("Salom")
// })()


//? Class

class User {
   constructor(name, work, single, image) {
  this.name = name
  this.work = work
  this.single = single
  this.image = image
   }
}

const user = new User("Ogabek", "PDP", true, undefined)
console.log(user);


class Car {
   constructor(model, auto, fuel) {
  this.model = model
  this.auto = auto
  this.fuel = fuel
   }
}

const car = new Car("Malibu", true, "benzin",)
console.log(car);


class Phone {
   constructor(name, storage, internet) {
  this.name = name
  this.storage = storage
  this.internet = internet
   }
}

const phone = new Phone("redmi", 64, "LTE")
console.log(phone);




class Hotel {
   constructor(room, stage, area) {
  this.room = room
  this.stage = stage
  this.area = area
   }
}


const hotel = new Hotel(14, 3, 323.5)

console.log(hotel);