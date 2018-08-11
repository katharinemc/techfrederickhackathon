module.exports = function(app){

app.post('/scoresi', function (req, res) {
    var knex = require('../server.js');
    res.send('inserting scores')
    knex('scores').insert({score: res.body.score})
  })

app.post('/scoresd', function (req, res) {
    var knex = require('../server.js');
    res.send('deleting scores')
    knex('scores')
.where('teamid', res.body.teamid)
.del()
    })

app.post('/scoresu', function (req, res) {
    var knex = require('../server.js');
    res.send('upading scores')
    knex('scores')
.where('teamid', res.body.teamid)
.update({
  score: res.body.score,
})
    })

app.get('/scoress', function (req, res) {
    var knex = require('../server.js');
    res.send('selecting scores')
    knex.select('teamid', 'roundid', 'score').from('scores')
    })

}