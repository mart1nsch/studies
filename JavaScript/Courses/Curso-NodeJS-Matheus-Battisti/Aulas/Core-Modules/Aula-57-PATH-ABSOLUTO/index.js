const path = require('path');

//Path Absoluto
console.log(path.resolve('teste.txt'));

//Formar Path
const midFolder = 'relatorios';
const fileName = 'relatorio1.pdf';

const finalPath = path.join('/', 'arquivos', midFolder, fileName);

console.log(finalPath);