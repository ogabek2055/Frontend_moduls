//? Type annotation
// type User = {
//     name: String,
//     age: Number,
//     fullname(age: number): void;
// }
// const user: User = {
//     name: "Ogabek",
//     age:40,
//     fullname(age) {
//         String(this.age)
//     }
// }
// console.log(user.fullname(20));
//? litiral type
// type VerifyFunc = (user:"student" | "teacher") => string;
// function verify(user: "student" | "teacher"): void {
//     if (user === "student") {
//         console.log(true);
//     } else if (user === "teacher") {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// verify("teacher")
// let checkData: Function;
//? function as types 
// checkData = function () {
//     console.log("Assalomu alaykum Ogabek Aka?!");
// }
// checkData()
//? Arrow func
// let sum: (a: number, b:number) => number;
// sum = function (n1, n2) {
//     return n1 + n2
// }
// sum(12, 13)
//? types in callback
// function blabla(a: number, b:number, cb:(x?: number) => void): void {
//     return cb(12)
// }
//? Any and Unknown
// let userInput: unknown;
// let userName: string;
// userInput = 5;
// userName =  "Ogabek"
// userName = userInput;
// console.log(userInput);
//? utility function = kop ishlatiladigan narsalar uchun 
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occured", 500);
