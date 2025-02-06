// Chamar o node assim: node index.js nome=Martin idade=23
const args = process.argv.slice(2);
const nome = args[0].split("=")[1];
const idade = args[1].split("=")[1];

console.log(`Olá ${nome}!! Sua idade é ${idade}.`);