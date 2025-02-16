const express = require('express');
const router = express.Router();
const path = require('path');
const basePath = path.join(__dirname, '../templates');

router.get('/', (req, res) => {

    res.sendFile(`${basePath}/products.html`);

});

router.post('/add', (req, res) => {

    const name = req.body.name;
    const qtd = req.body.qtd;

    console.log(`O seu produto é ${name} e você tem ${qtd} em estoque.`);

    res.sendFile(`${basePath}/index.html`);

});

module.exports = router;