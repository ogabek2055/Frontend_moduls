const players = ["Ogabek", "Axmadxon", "Xondamir", "Abbos"];

function random(array) {
    const teamLength = array.length / 2;
    const team = [];

    for (let i = 0; i < teamLength; i++) {
        const randomPlayerIdx = Math.floor(Math.random() * array.length)
        team.push(array[randomPlayerIdx])
        array.splice(randomPlayerIdx, 1);
    }
    return { team1: team, team2: array }
}

console.log(random(players));