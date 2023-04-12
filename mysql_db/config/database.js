const { Sequelize } = require('sequelize');

module.exports = new Sequelize(
 'Colegia2',
 'root',
 'mobicip1234',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

