const express = require('express');
const path = require('path');

const userRoutes = require('./users');

const app = express();

const port = 3000;

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

app.use(express.static('public')); // Arquivos CSS vão nessa pasta

const basePath = path.join(__dirname, 'templates');

app.use('/users', userRoutes);

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`);

});

app.use((req, res, next) => {

    res.status(404);
    res.sendFile(`${basePath}/404.html`);

});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
});