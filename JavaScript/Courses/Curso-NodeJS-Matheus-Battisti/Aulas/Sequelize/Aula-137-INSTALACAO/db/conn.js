const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodesequelize', 'root', '1234', {
    host: "localhost",
    dialect: "mysql"
});

try {

    sequelize.authenticate();
    console.log('Conectou');

} catch(err) {
    console.log(err);
}

module.exports = sequelize;