const formRandom = document.getElementById("randomPlayers")

let playersArr = [];

formRandom.addEventListener("click", (e) => {
    e.preventDefault()

    const fullname = e.target[0].value;
    const number = e.target[1].value;

    const playersObj = {
        fullname,
        number,
    };

    playersArr.push(playersObj)
    console.log(playersArr);
});
