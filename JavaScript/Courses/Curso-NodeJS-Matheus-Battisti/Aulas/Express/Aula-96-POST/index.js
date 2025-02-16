const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

const basePath = path.join(__dirname, 'templates');

const checkAuth = (req, res, next) => {
    
    req.authStatus = true;

    if (req.authStatus) {
        console.log('Está logado');
        next();
    } else {
        console.log('Não está logado, faça o login primeiro');
    }

}

app.use(checkAuth);

app.get('/users/add', (req, res) => {

    res.sendFile(`${basePath}/userform.html`);

});

app.post('/users/save', (req, res) => {

    const name = req.body.name;
    const age = req.body.age;

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos.`);

    res.sendFile(`${basePath}/userform.html`);

});

app.get('/users/:id', (req, res) => {

    const id = req.params.id;

    console.log(`Buscando usuário ID: ${id}`);

    res.sendFile(`${basePath}/users.html`);

});

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`);

});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
});