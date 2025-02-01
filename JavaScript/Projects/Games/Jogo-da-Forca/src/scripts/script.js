const palavra = "RATOEIRO";
let letras = [];
let widthPalavra = 0;
let tentativasErradas = 0;

for (let i=0; i<palavra.length; i++){
    letras.push(palavra.substring(i, (i + 1)));
}

letras.forEach(letra => {
    const element = document.createElement("div");
    element.className = "palavra-letra";
    element.innerHTML = letra;
    document.querySelector("#palavra").appendChild(element);

    widthPalavra += 30;
})

const elementPalavra = document.getElementById("palavra");
elementPalavra.style.width = widthPalavra+"px";

for (let i=1; i<=26; i++){
    const letter = document.getElementById("letra"+i);
    
    letter.addEventListener("click", () => {
        letterClick("letra"+i);
    })
}

function letterClick(id){
    const letter = document.getElementById(id);
    let fountLetter = false;

    if (letter.className === "letra-correta" || letter.className === "letra-errada"){
        return;
    }

    letras.forEach(letra => {
        if (letter.innerHTML === letra){
            fountLetter = true;

            const letterElements = document.querySelectorAll(".palavra-letra");

            letterElements.forEach(letterElement => {
                if (letterElement.innerHTML === letter.innerHTML){
                    letterElement.classList.add("letra-revelada");
                }
            })

            letter.className = "letra-correta";
        }
    })

    if (fountLetter === false){
        letter.className = "letra-errada";
        ++tentativasErradas;

        document.getElementById("img-forca").src = `./src/img/forca-${tentativasErradas}.png`;

        if (tentativasErradas === 6){
            const msg = document.getElementById("mensagem");
            const msgH3 = document.getElementById("mensagem-texto");

            msgH3.innerHTML = "VOCÊ PERDEU! :(";
            msg.style.display = "flex";
        }
    } else {
        while (letras.indexOf(letter.innerHTML) > -1){
            letras.splice(letras.indexOf(letter.innerHTML), 1);
        }
        console.log(letras);
        if (letras.length === 0){
            const msg = document.getElementById("mensagem");
            const msgH3 = document.getElementById("mensagem-texto");

            msgH3.innerHTML = "VOCÊ VENCEU! :)";
            msg.style.display = "flex";
        }
    }
}