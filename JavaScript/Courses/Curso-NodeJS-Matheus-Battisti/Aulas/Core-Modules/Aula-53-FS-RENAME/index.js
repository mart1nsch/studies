const fs = require('fs');

fs.rename('arquivo.txt', 'mudaNome.txt', (err) => {
    if(err) {
        console.log(err);
        return;
    }

    console.log('Arquivo renomeado!');
})