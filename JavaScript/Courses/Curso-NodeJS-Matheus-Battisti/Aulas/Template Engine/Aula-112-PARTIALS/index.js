const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
});

app.engine('handlebars', hbs.engine);
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

    const items = [
        {
            id: 10,
            name: 'Item A'
        },
        {
            id: 11,
            name: 'Item B'
        },
        {
            id: 12,
            name: 'Item C'
        },
    ];

    res.render('dashboard', { items: items });

});

app.get('/login', (req, res) => {

    res.render('login');

});

app.get('/post', (req, res) => {

    const post = {
        title: "Aprender Node",
        category: "javascript",
        body: "Artigo top",
    }

    res.render('blogpost', { post });

});

app.get('/blog', (req, res) => {

    const posts = [
        {
            title: "Aprender Node",
            category: "javascript",
            body: "Artigo top 1",
        },
        {
            title: "Aprender Git",
            category: "git",
            body: "Artigo top 2",
        },
        {
            title: "Aprender Java",
            category: "java",
            body: "Artigo top 3",
        },
        {
            title: "Aprender React",
            category: "javascript",
            body: "Artigo top 4",
        },
    ]

    res.render('blog', { posts });
    
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});