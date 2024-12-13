const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:'); // Usando SQLite em memória

module.exports = sequelize;
