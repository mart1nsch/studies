const fs = require('fs'); // Usa o módulo FileSystem

             //Arquivo                Função que retorna erro ou o dado do arquivo
fs.readFile('./arquivo.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});