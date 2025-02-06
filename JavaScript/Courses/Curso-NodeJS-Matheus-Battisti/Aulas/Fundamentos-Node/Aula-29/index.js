//Chamar o node assim: node index.js --a=4 --b=3
const minimist = require('minimist');
const soma = require('./soma').soma;

const args = minimist(process.argv.slice(2));

const a = Number(args['a']);
const b = Number(args['b']);

console.log(soma(a, b));