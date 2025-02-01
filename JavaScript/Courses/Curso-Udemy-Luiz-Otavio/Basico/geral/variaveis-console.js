/*
console.log('Martin Schneider');
console.log("Martin Schneider");
console.log(`Martin Schneider`);
console.log("Martin 'Schneider'");
console.log('Martin "Schneider"');

console.log(12, 35.89, "Martin");
*/

const nome = "Luiz Otávio";
const sobrenome = "Miranda";
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
const indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
const dataAtual = new Date();
const anoNascimento = dataAtual.getFullYear() - idade;

/*
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}`);
*/

let varA = "A"; // B
let varB = "B"; // C
let varC = "C"; // A
let value;

/* Pode ser feito assim
value = varA;
varA = varB;
varB = varC;
varC = value;
*/

// Ou assim, muito mais legal kkkkk

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);