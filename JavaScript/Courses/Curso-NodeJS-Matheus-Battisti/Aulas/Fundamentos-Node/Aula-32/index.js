const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question("Qual seu nome: ", (nome) => {
    console.log(`Bem vindo ${nome}!!`);
    readline.close();
});