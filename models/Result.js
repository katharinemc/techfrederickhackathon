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

const Team = require ('../models/Team');
const Game = require ('../models/Games');

require('pg').types.setTypeParser(1114, stringValue => {
  return new Date(stringValue + '+0000');
  // e.g., UTC offset. Use any offset that you would like.
});

module.exports = (sequelize, DataTypes) => {

  const Result = sequelize.define('result', {
    roundId: DataTypes.UUID,
    timeStamp: DataTypes.Date
  });

  Result.associate = function(Team, Game) {
    Result.hasOne(Game, {foreignKey: Game.id});
    Result.hasOne(Team, {as: 'Winning Team', foreignKey: Team.id });
  };


  return Result;
};