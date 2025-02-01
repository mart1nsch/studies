const containerElement = document.querySelector(`.container`);
const elements = [
    {tag: `p`, texto: `Frase 1`},
    {tag: `div`, texto: `Frase 2`},
    {tag: `footer`, texto: `Frase 3`},
    {tag: `section`, texto: `Frase 4`}
];

function createElementsDOM() {
    const divContainer = document.createElement(`div`);
    divContainer.className = `div-container`;
    containerElement.appendChild(divContainer);
    
    for (let i=0; i<elements.length; i++) {
        const { tag, texto } = elements[i];
        const element = document.createElement(tag);
        element.innerText = texto;
        divContainer.appendChild(element);
    }
}

createElementsDOM();
