const inquirer = require('inquirer');
const soma = require('./soma').soma;

inquirer.prompt([
    {
        name: "p1",
        message: "Qual a primeira nota: ",
    },
    {
        name: "p2",
        message: "Qual a segunda nota: ",
    },
])
.then(response => {
    calculaNotas(response["p1"], response["p2"]);
})
.catch(e => {
    console.log("Erro:", e);
})

function calculaNotas(nota1, nota2) {
    const calculo = (Number(nota1) + Number(nota2)) / 2;
    console.log(`Sua média é ${calculo}`);
}