const fullname = document.getElementById("name")

const playerArr = JSON.parse(localStorage.getItem("players")) || [];

//! This function for adding players
function addBtn() {
    const playerObj = {
        fullname: fullname.value
    }
    playerArr.push(playerObj)
    localStorage.setItem("players", JSON.stringify(playerArr))
    alert(playerObj.fullname + " jamoaga qoshildi!" + "  Jamoada: " + playerArr.length + " ta ishtirokchi bor !!!")
    console.log(playerArr);
    fullname.value = ""
}

//! This function for choosing players with RANDOM
function randomPlayers(array) {
    const teamLength = array.length / 2;
    const team = [];

    for (let i = 0; i < teamLength; i++) {
        const playerIdx = Math.floor(Math.random() * array.length)
        team.push(array[playerIdx])
        array.splice(playerIdx, 1);
    }
    return { team1: team, team2: array }
}


//! This function for DOM
function renderderedPlayers(teams) {
    const renderPlayers1 = document.getElementById("renderedPly")
    const renderPlayers2 = document.getElementById("renderedPly2")
    renderPlayers1.innerHTML = ""
    renderPlayers2.innerHTML = ""




    //! This loop for team1 
    for (let i = 0; i < teams.team1.length; i++) {
        console.log(teams.team1.length);
        const templete = `
        <li>
        <h2>${teams.team1[i].fullname}</h2>
    </li>
        `
        renderPlayers1.innerHTML += templete
    }






    //! This loop for team2 
    for (let i = 0; i < teams.team2.length; i++) {
        const templete = `
        <li>
        <h2>${teams.team2[i].fullname}</h2>
    </li>
        `
        renderPlayers2.innerHTML += templete
    }
}




//! This function for Render Button 
function render() {
    const teams = randomPlayers(playerArr)
    renderderedPlayers(teams)

}


