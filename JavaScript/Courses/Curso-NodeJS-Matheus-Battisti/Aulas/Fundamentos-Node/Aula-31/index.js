//Chmar o node assim: node index.js --nota=1
const chalk = require('chalk');
const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
const nota = args['nota'];

if(nota >= 6) {
    console.log(chalk.green("Parabéns! Você está aprovado!"));
} else {
    console.log(chalk.red("Vai ter que fazer recuperação."));
}