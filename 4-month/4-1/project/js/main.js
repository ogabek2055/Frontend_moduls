const userName = document.getElementById("name")
const userPhone = document.getElementById("tel")

let userArr = JSON.parse(localStorage.getItem("user")) || []

renderUser()

function addProduct() {
    const userObj = {
        id: userArr.length,
        name: userName.value,
        tel: userPhone.value,
    }
    // console.log(userObj.id);
    userArr.push(userObj)
    localStorage.setItem("user", JSON.stringify(userArr))
    userName.value = "";
    userPhone.value = "";
    renderUser()
}

function renderUser() {
    const showing = document.getElementById("show")
    showing.innerHTML = "";
    for (let i = 0; i < userArr.length; i++) {
        const templete = `
        <li>
            <h2>Name: ${userArr[i].name}</h2>
            <h3>Tel: ${userArr[i].tel}</h3>
            <button onclick="deleted(${userArr[i].id})">Delete</button>
        </li>
        `
        showing.innerHTML += templete;

    }
}


function deleted(id) {
    // console.log("working");
    let newArray = [];
    for (let i = 0; i < userArr.length; i++) {
        if (userArr[i].id != id) {
            newArray[newArray.length] = userArr[i]
        }
    }
    userArr = newArray;
    renderUser()
    localStorage.setItem("user", JSON.stringify(userArr))
}