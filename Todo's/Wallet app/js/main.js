const token = localStorage.getItem("token")
const myName = document.querySelector("#myName")
const addCardInfo = document.querySelector("#addCardInfo")
const addCardRender = document.querySelector("#addCardRender")
const addCardPrice = document.querySelector("#addCardPrice")

if (!token) {
    window.location.replace("./register.html")
}



// //! change name
// myName.addEventListener("click", () => {
//     const newName = prompt("Enter new Name !")
//     if (newName) {
//         myName.innerHTML = newName
//     } else {
//         alert("Please Enter a name")
//     }
// })



let balanceDb = JSON.parse(localStorage.getItem("balanceDb")) || []
renderCard(balanceDb)
//! add Card
addCardInfo.addEventListener("submit", (event) => {
    event.preventDefault()

    const cardName = event.target[0].value
    const bankName = event.target[1].value

    const cardObj = {
        id: balanceDb.length + 1,
        cardName,
        bankName
    }

    balanceDb.push(cardObj)
    console.log(balanceDb);
    renderCard(balanceDb)
    localStorage.setItem("balanceDb", JSON.stringify(balanceDb))
})

//! add Price
addCardPrice.addEventListener("submit", (event) => {
    event.preventDefault()

    const price = event.target[0].value

    const priceObj = {
        id: balanceDb.length + 1,
        price
    }
    balanceDb.push(priceObj)
    console.log(balanceDb);
    renderCard(balanceDb)
    localStorage.setItem("balanceDb", JSON.stringify(balanceDb))

})

//! Render Cards 
function renderCard(balanceDb) {
    addCardRender.innerHTML = ""
    console.log("Working Ul");
    balanceDb.forEach(card => {
        const template = `
        <li style="height: 156px; width: 196px;" class="addCard__list-item item-adding ">
        <button  type="submit" class="add-card-btn btn" data-bs-toggle="modal"
            data-bs-target="#priceModal">
            <div class="priceInfo">
                <img style="height: 36px; width: 36px; border-radius: 50%;" src="./images/Humo.jpg"
                    alt="humo">
                <div class="nameCard">
                    <h4>${card.cardName}</h4>
                    <h5>${card.bankName}</h5>
                </div>
            </div>
            <div class="shownPrice">
                <h4>$0</h4>
            </div>
            </button>
            <button onclick="deleted(${card.id})" style="margin-top: 100px; width: 100%;" class="btn btn-danger">Delete</button>
            </li>
        `
        addCardRender.innerHTML += template
    });
}

//! Deleted Cards

function deleted(id) {
    console.log(id);
    let deletedCard = []
    balanceDb.forEach(card => {
        if (card.id != id) {
            deletedCard.push(card)
        }
    })
    balanceDb = deletedCard
    renderCard(balanceDb)
    localStorage.setItem("balanceDb", JSON.stringify(balanceDb))
}