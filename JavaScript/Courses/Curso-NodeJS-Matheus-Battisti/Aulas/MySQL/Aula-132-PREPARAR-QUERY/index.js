const express = require('express');
const exphbs = require('express-handlebars');
const pool = require('./db/conn');

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

    const insert = `INSERT INTO BOOKS (??,
                                       ??)
                               VALUES (?,
                                       ?);`;
    const data = [`TITULO`, `NUMERO_PAGINAS`, titulo, numeroPaginas];
    
    pool.query(insert, data, err => {

        if (err) {
            console.log(err);
            return;
        }

        res.redirect('/');

    });
});

app.get('/books', (req, res) => {

    const query = 'SELECT * FROM BOOKS';

    pool.query(query, (err, data) => {

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

    pool.query(query, (err, data) => {

        if (err) {

            console.log(err);
            return;

        }

        const book = data;
        
        res.render('book', { book });

    });

});

app.get('/books/edit/:id', (req, res) => {

    const id = req.params.id;

    const query = `SELECT * FROM BOOKS WHERE ID = ${id}`;

    pool.query(query, (err, data) => {

        if (err) {

            console.log(err);
            return;

        }

        const book = data[0];
        
        res.render('edit', { id: book.ID, titulo: book.TITULO, numeroPaginas: book.NUMERO_PAGINAS });

    });

});

app.post('/books/updatebooks', (req, res) => {

    const titulo = req.body.titulo;
    const numeroPaginas = req.body.numeroPaginas;
    const id = req.body.id;

    const update = `UPDATE BOOKS
                       SET TITULO = "${titulo}",
                           NUMERO_PAGINAS = ${numeroPaginas}
                     WHERE ID = ${id}`;
    
    pool.query(update, err => {

        if (err) {
            console.log(err);
            return;
        }

        res.redirect('/books');

    });

});

app.post('/books/delete', (req, res) => {

    const id = req.body.id;

    const deleteQuery = `DELETE FROM BOOKS WHERE ID = ${id}`;

    pool.query(deleteQuery, err => {

        if (err) {
            console.log(err);
            return;
        }

        res.redirect('/books');

    });

});

app.listen(3000);