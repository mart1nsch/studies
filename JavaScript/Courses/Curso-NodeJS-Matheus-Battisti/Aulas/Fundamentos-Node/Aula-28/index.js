//Chamar o node assim: node index.js --nome=Martin
const minimist = require('minimist');
const args = minimist(process.argv.slice(2));

console.log(args.nome);