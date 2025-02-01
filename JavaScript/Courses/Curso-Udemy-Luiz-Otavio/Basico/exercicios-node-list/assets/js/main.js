const paragrafosElement = document.querySelector(`.paragrafos`);
const paragrafo = paragrafosElement.querySelectorAll(`p`);
const body = document.body;
const bodyStyles = getComputedStyle(body);
const bodyBackgroundColor = bodyStyles.backgroundColor;

for (let valor of paragrafo) {
    valor.style.backgroundColor = bodyBackgroundColor;
    valor.style.color = `white`;
}