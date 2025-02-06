const fs = require('fs');

console.log('comeco');

fs.writeFileSync('arquivo.txt', 'martin'); //Cria o arquivo caso não exista e coloca escrito dentro dele martin de forma SINCRONA

console.log('fim');