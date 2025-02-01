/*console.log(Math.round(Math.random() * (10 - 2) + 2));*/

const number = Number(prompt("Digite o seu número: "));

document.getElementById("titulo").innerHTML = number;
document.getElementById("raiz").innerHTML = number ** 0.5;
document.getElementById("numero").innerHTML = number;
document.getElementById("inteiro").innerHTML = Number.isInteger(number);
document.getElementById("nan").innerHTML = Number.isNaN(number);
document.getElementById("arredondando-baixo").innerHTML = Math.floor(number);
document.getElementById("arredondando-cima").innerHTML = Math.ceil(number);
document.getElementById("duas-casas-decimais").innerHTML = number.toFixed(2);