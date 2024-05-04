const token = localStorage.getItem("token")
const logOut = document.querySelector("#logOut")
const addProjectForm = document.querySelector("#addProjectForm")

if (!token) {
    window.location.replace("./register.html")
}

getProducts()


//! Log Out 
logOut.addEventListener("click", () => {
    localStorage.removeItem("token")
    window.location.reload()
});


//! Add products
addProjectForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const code = event.target[0].value
    const name = event.target[1].value
    const qty = event.target[2].value
    const price = event.target[3].value
    const unit = event.target[4].value


    try {
        const response = await fetch("https://joil.onrender.com/api/v1/product", {
            headers: {
                "Content-Type": "application/json",
                authorization: token,
            },
            method: "POST",
            body: JSON.stringify({
                code,
                name,
                qty,
                price,
                unit,
            }),
        })

        const products = await response.json()
        alert(products.message)
        getProducts()
    } catch (error) {
        console.log(error.message);
    }

})


//! get products

async function getProducts() {
    try {
        const res = await fetch("https://joil.onrender.com/api/v1/product/pagination?page=1&pageSize=100", {
            headers: {
                "Content-Type": "application/json",
                authorization: token,
            },
        })
        const products = await res.json();
        renderProducts(products.data)
    } catch (error) {
        console.log(error);
    }
}


//! render Products 

function renderProducts(products) {
    const productListEl = document.querySelector("#productList")
    productListEl.innerHTML = "";
    products.forEach(product => {
        const template =
            `
      <li>Code:${product.code}</li>
      <li>Name:${product.name}</li>
      <li>Quantity:${product.qty}</li>
      <li>Price:${product.price}</li>
      <li>unit:${product.unit}</li>
      <button onclick="deleteProduct('${product._id}')">Delete</button>
      </br>
      `

        productListEl.innerHTML += template
    });
}


async function deleteProduct(id) {
    const res = await fetch(`https://joil.onrender.com/api/v1/product/${id}`, {
        headers: {
            authorization: token,
        },
        method: "DELETE"
    })
    const data = await res.json()
    alert(data.message)
    getProducts()
}