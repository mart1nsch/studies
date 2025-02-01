const keys = document.querySelectorAll(".tecla");

let audio = new Audio("/src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `/src/tunes/${key}.wav`;
    audio.play();

    const keyPressed = document.querySelector(`[data-key='${key}']`);
    keyPressed.classList.add("active");
    setTimeout(() => {
        keyPressed.classList.remove("active");
    }, 150);
}

keys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
})

document.addEventListener("keydown", (keyPressed) => {
    playTune(keyPressed.key);
})