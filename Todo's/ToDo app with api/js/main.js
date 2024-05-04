const todoForm = document.querySelector("#todoForm")
const todoList = document.querySelector("#todoList")

//! POST  
todoForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const fullname = event.target[0].value
    const phoneNumber = event.target[1].value


    fetch("https://crudcrud.com/api/8df3d2a2b9ae41c2b9d1e223b9a12518/users", {
        headers: {
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
            fullname,
            phoneNumber,
        })
    }).then(response => response.json()).then(todos => {
        console.log(todos);
        alert(todos.fullname + " muvaffaqiyatli qoshildi!")
        getTodos()
    })
})

//! GET

let users = null

async function getTodos() {
    const res = await fetch("https://crudcrud.com/api/8df3d2a2b9ae41c2b9d1e223b9a12518/users")
    users = await res.json()
    render(users)
}
getTodos()

//? render function for users

function render(users) {
    todoList.innerHTML = "";
    users.forEach(user => {
        const templete = `
    <li>Fullname: ${user.fullname}</li>
    <li>Phone Number: ${user.phoneNumber}</li>
    `
        todoList.innerHTML += templete;
    });
}
