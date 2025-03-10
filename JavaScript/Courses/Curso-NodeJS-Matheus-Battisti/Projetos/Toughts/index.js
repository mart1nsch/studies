const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const flash = require('express-flash');
const conn = require('./db/conn');

const app = express();

conn.sync()
.then(() => {
    app.listen(3000);
})
.catch(err => {
    console.log(err);
})