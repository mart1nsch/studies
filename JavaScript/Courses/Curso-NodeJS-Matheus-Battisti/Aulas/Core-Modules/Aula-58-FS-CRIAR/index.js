const fs = require('fs');

if (!fs.existsSync('./teste')) {
    fs.mkdirSync('teste');
    console.log('Arquivo criado');
} else if (fs.existsSync('./teste')) {
    console.log('Arquivo existe');
}