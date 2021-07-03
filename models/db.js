const Sequelize = require('sequelize');

const sequelize = new Sequelize ("postgres://postgres:507472ad19684ca69cbc84b6ee9bb049@localhost:5432/workout-log-server");

module.exports = sequelize