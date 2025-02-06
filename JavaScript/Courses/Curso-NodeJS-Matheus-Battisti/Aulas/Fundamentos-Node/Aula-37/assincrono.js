const fs = require('fs');

console.log('comeco');

fs.writeFile('arquivo.txt', 'opa', () => {
    setTimeout(() => {
        console.log('arquivo criado');
    }, 1000);
}); //Cria o arquivo caso não exista e coloca escrito dentro dele martin de forma ASSINCRONA, demora 1 segundo para fazer por causa do setTimeout

console.log('fim');