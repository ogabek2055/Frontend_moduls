//? JSON => JavaScript Object Notation => Object as String


const user = {
    name: "Ogabek",
    age: 19,
};


//?  Object to JSON = stringfy
// const stringJSON = JSON.stringify(user)
// console.log(stringJSON);

//? JSON to Object = parse 
// const objectJSON = JSON.parse(stringJSON)
// console.log(objectJSON);

//? localStorage

localStorage.setItem( "user" , JSON.stringify(user))

