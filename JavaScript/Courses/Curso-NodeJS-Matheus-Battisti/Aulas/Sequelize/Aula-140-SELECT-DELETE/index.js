const express = require('express');
const exphbs = require('express-handlebars');
const conn = require('./db/conn');
const User = require('./models/User');

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

app.get('/', async (req, res) => {

    const users = await User.findAll({ raw: true });

    res.render('home', { users: users });

});

app.get('/users/create', (req, res) => {

    res.render('adduser');

});

app.get('/users/:id', async (req, res) => {

    const id = req.params.id;
    
    const user = await User.findOne({ where: { id: id } , raw: true});

    res.render('userview', { user: user });

});

app.post('/users/create', async (req, res) => {

    const name = req.body.name;
    const occupation = req.body.occupation;
    let newsletter = req.body.newsletter;

    if (newsletter === 'on') {
        newsletter = true;
    }

    await User.create({ name, occupation, newsletter });

    res.redirect('/');

});

app.post('/users/delete', async (req, res) => {

    const id = req.body.id;

    await User.destroy({ where: { id: id } });

    res.redirect('/');

});

conn.sync()
.then(() => {
    app.listen(3000);
})
.catch(err => console.log(err));