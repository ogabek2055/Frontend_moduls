const recognition = new webkitSpeechRecognition();
recognition.continuous = false;
recognition.lang = "uz-UZ";

const colors = {
    qizil: "red",
    yashil: "green",
    pushti: "pink",
    qora: "black",
}

recognition.onresult = async (result) => {
    const words = result.results[0][0].transcript

    document.querySelector("#input").value = words
    document.body.style.background = colors[words];

    console.log(words);


    try {
        const res = await fetch(`https://api.nationalize.io/?name=${words}`, {
        })
        const data = await res.json()
        console.log(data.country);
        render(data.country)
    } catch (error) {
        console.log(error);
    }
};

recognition.onstart = () => {
    console.log("Gapir");
}

recognition.onend = () => {
    console.log("Toxtaildi");
}

function listen() {
    recognition.start()
}



function render(array) {
    const list = document.querySelector("#list")
    list.innerHTML = ""
    array.forEach(country => {
        const template = `
        <li>
           <h2>Nation:${country.country_id}</h2>
        </li>
        `
        list.innerHTML += template
    });
}

/* <h2>${country.probability}</h2> */