var con = require('../server.js');

module.exports = function(app){

app.post('/teamsi', function (req, res) {
  res.send('teams')
  knex('teams').insert({tname: 'TBD'})
})

app.post('/teamsd', function (req, res) {
  res.send('teams')
  knex('teams')
.where('tname', 'TBD')
.del()
})

app.post('/teamsu', function (req, res) {
  res.send('teams')
  knex('teams')
.where('tname', 'TBD')
.update({
  tname: 'TBD',
})
})

app.get('/teamss', function (req, res) {
  res.send('teams')
  knex.select('tname', 'teamid').from('teams')
})

}