const express = require('express');
const router = express.Router();
const path = require('path');
const basePath = path.join(__dirname, '../templates');

router.get('/', (req, res) => {

    res.sendFile(`${basePath}/users.html`);

});

router.post('/add', (req, res) => {

    const name = req.body.name;
    const age = req.body.age;

    console.log(`O seu nome é ${name} e você tem ${age} anos.`);

    res.sendFile(`${basePath}/index.html`);

});

module.exports = router;