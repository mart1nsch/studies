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

const basePath = path.join(__dirname, 'templates');

app.use('/users', userRoutes);

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`);

});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
});