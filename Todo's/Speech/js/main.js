const recognition = new webkitSpeechRecognition();
recognition.continuous = false;
recognition.lang = "uz-UZ";

const colors = {
    qizil: "red",
    yashil: "green",
    pushti: "pink",
    qora: "black",
}

recognition.onresult = (result) => {
    const words = result.results[0][0].transcript

    document.querySelector("#input").value = words
    document.body.style.background = colors[words];

    console.log(words);
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