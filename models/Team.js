'use strict';

const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

module.exports = (sequelize, DataTypes) => {

  const Team = sequelize.define('team', {
    teamName: Sequelize.STRING,
    teamId: Sequelize.UUID,
    teamMembers: Sequelize.STRING
  });

  return Team;
};