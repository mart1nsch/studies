const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodemvc', 'root', '1234', {
    host: "localhost",
    dialect: "mysql"
});

try {
    sequelize.authenticate();
    console.log('Conectou');
} catch(err) {
    console.log('Não conectou:', err);
}

exports.default = sequelize;