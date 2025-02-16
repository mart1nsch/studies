const express = require('express');
const userRoutes = require('./users');
const productsRoutes = require('./products');
const path = require('path');
const basePath = path.join(__dirname, 'templates');

const app = express();

const port = 5000;

app.use(express.static('public'));

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

app.use('/users', userRoutes);
app.use('/products', productsRoutes);

app.get('/', (req, res) => {
    
    res.sendFile(`${basePath}/index.html`);

});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}.`);
});