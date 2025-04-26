const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bd_academy', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
