const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(
    express.urlencoded({
        extended: true,
    }),
);

app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {

    res.render('home');

});

app.post('/books/insertbook', (req, res) => {

    const titulo = req.body.titulo;
    const numeroPaginas = req.body.numeroPaginas;

    const insert = `INSERT INTO BOOKS (TITULO,
                                      NUMERO_PAGINAS)
                              VALUES ('${titulo}',
                                      ${numeroPaginas});`;
    
    conn.query(insert, err => {

        if (err) {
            console.log(err);
            return;
        }

        res.redirect('/');

    });
});

app.get('/books', (req, res) => {

    const query = 'SELECT * FROM BOOKS';

    conn.query(query, (err, data) => {

        if (err) {

            console.log(err);
            return;

        }

        const books = data
        
        res.render('books', { books });

    });

});

app.get('/books/:id', (req, res) => {

    const id = req.params.id;

    const query = `SELECT * FROM BOOKS WHERE ID = ${id}`;

    conn.query(query, (err, data) => {

        if (err) {

            console.log(err);
            return;

        }

        const book = data;
        
        res.render('book', { book });

    });

});

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "nodemysql"
});

conn.connect(err => {

    if (err) {
        console.log(err);
        return;
    }

    console.log('Conectou!!');

    app.listen(3000);

});