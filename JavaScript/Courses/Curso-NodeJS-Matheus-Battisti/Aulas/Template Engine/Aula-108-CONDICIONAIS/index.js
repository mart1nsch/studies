const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {

    const user = {
        name: "Martin",
        age: 23,
    }

    const auth = true;

    res.render('home', { user: user, auth: auth });

});

app.get('/dashboard', (req, res) => {

    res.render('dashboard');

});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});