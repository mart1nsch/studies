const inputElement = document.getElementById('input-radius');
const boxElement = document.querySelector('.box');

inputElement.addEventListener('keyup', (e) => {
    const radiusValue = e.target.value;
    applyRadius(radiusValue);
});

function applyRadius(radius) {
    boxElement.style.borderRadius = `${radius}px`;
}