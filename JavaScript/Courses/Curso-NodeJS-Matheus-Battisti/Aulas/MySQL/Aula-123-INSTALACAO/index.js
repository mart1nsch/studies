const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', (req, res) => {

    res.render('home');

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