module.exports = function(app){

app.post('/teamsi', function (req, res) {
  var knex = require('../server.js');
  res.send('inserting teams')
  knex('teams').insert({tname: req.body.tname})
})

app.post('/teamsd', function (req, res) {
  var knex = require('../server.js');
  res.send('deleting teams')
  knex('teams')
.where('tname', req.body.tname)
.del()
})

app.post('/teamsu', function (req, res) {
  var knex = require('../server.js');
  res.send('updating teams')
  knex('teams')
.where('tname', req.body.tname)
.update({
  tname: req.body.tname,
})
})

app.get('/teamss', function (req, res) {
  var knex = require('../server.js');
  res.send('selecting teams')
  knex.select('tname', 'teamid').from('teams')
})

}