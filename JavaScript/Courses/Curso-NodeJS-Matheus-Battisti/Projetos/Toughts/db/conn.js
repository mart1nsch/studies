const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('toughts', 'root', '1234', {
    host: "localhost",
    dialect: "mysql"
});

try {
    sequelize.authenticate();
    console.log('Conectado');
} catch(err) {
    console.log('Falha ao conectar:', err);
}

module.exports = sequelize;