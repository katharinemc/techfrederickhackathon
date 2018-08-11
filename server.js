var express = require('express')
var app = express()
var pg = require('pg');
require('./routes/games.js')(app);
require('./routes/results.js')(app);
require('./routes/teams.js')(app);

var knex = require('knex')({
    client: 'pg',
    connection: process.env.PG_CONNECTION_STRING || "postgres://postgres:guest@db:5432",
    searchPath: ['knex', 'public'],
  });

  module.exports = knex

app.listen(5000, function () {
    console.log('Dev app listening on port 5000!');
});