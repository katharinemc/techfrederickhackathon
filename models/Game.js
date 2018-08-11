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

  const Game = sequelize.define('game', {
    gameName: DataTypes.STRING,
    gameId: DataTypes.UUID,
    gameDescription: DataTypes.STRING
  });

  return Game;
};