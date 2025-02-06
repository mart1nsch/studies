const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer.prompt([
    {
        name: "p1",
        message: "Qual o seu nome? ",
    },
    {
        name: "p2",
        message: "Qual a sua idade? ",
    },
])
.then(response => {
    mostraResposta(response["p1"], response["p2"]);
})
.catch(e => {
    console.log("Erro:", e);
})

function mostraResposta(nome, idade) {
    console.log(chalk.bgYellow.black.bold(`Seu nome é ${nome} e sua idade é ${idade}.`));
}