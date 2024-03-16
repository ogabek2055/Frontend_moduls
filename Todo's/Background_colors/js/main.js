const body = document.querySelector("body")
const button = document.querySelector("button")

const colors = ["pink", "yellow", "black", "white", "green", "purple", "red", "blue",];

body.style.backgroundColor = "black";

button.addEventListener("click", function () {
    const colorIdx = parseInt(Math.random() * colors.length);
    console.log(colorIdx);
    body.style.backgroundColor = colors[colorIdx]
})