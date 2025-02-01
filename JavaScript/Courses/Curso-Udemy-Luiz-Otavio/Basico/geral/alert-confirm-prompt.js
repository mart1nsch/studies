/*
alert("Isso é um alerta");

const confirmou = confirm("Voce tem certeza?");

const valorDigitado = prompt("Digite algo");
*/

const primeiroNumero = Number(prompt("Digite o primeiro número"));
const segundoNumero = Number(prompt("Digite o segundo número"));
const operacaoMatematica = prompt("Digite a operação matemática (+, -, *, /)");
const button = document.getElementById("button");
let resultado;

button.addEventListener("click", () => {
    window.location.reload();
})

if (operacaoMatematica === "+"){
    resultado = adicao(primeiroNumero, segundoNumero);
} else if (operacaoMatematica === "-"){
    resultado = subtracao(primeiroNumero, segundoNumero);
} else if (operacaoMatematica === "*"){
    resultado = multiplicacao(primeiroNumero, segundoNumero);
} else if (operacaoMatematica === "/"){
    resultado = divisao(primeiroNumero, segundoNumero);
}

function adicao(a, b){
    return a + b;
}

function subtracao(a, b){
    return a - b;
}

function multiplicacao(a, b){
    return a * b;
}

function divisao(a, b){
    return a / b;
}

if (resultado != undefined){
    alert(`Resultado: ${resultado}`);
}