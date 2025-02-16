const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

const products = [
    {
        id: 1,
        name: "Abacaxi",
        type: "Fruta",
        price: "R$5,00",
    },
    {
        id: 2,
        name: "Picanha",
        type: "Carne",
        price: "R$65,00",
    },
    {
        id: 3,
        name: "Coca-Cola",
        type: "Refrigerante",
        price: "R$9,00",
    },
    {
        id: 4,
        name: "Monster",
        type: "Energético",
        price: "R$10,00",
    },
    {
        id: 5,
        name: "Banana",
        type: "Fruta",
        price: "R$4,00",
    },
]

app.get('/', (req, res) => {

    res.render('home', { products });

});

app.get('/products/:id', (req, res) => {

    const id = req.params.id;

    const product = products[(id-1)];

    res.render('products', { name: product.name, type: product.type, price: product.price });

});

app.listen(3000);