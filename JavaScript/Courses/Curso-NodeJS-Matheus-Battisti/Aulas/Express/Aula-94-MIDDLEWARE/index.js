const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

const basePath = path.join(__dirname, 'templates');

const checkAuth = (req, res, next) => {
    
    req.authStatus = false;

    if (req.authStatus) {
        console.log('Está logado');
        next();
    } else {
        console.log('Não está logado, faça o login primeiro');
    }

}

app.use(checkAuth);

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`);

});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
});