var knex = require('../server.js');

module.exports = function(app){

app.post('/scoresi', function (req, res) {
    res.send('scores')
    knex('scores').insert({score: res.body.score})
  })

app.post('/scoresd', function (req, res) {
    res.send('scores')
    knex('scores')
.where('teamid', res.body.teamid)
.del()
    })

app.post('/scoresu', function (req, res) {
    res.send('scores')
    knex('scores')
.where('teamid', res.body.teamid)
.update({
  score: res.body.score,
})
    })

app.get('/scoress', function (req, res) {
    res.send('scores')
    knex.select('teamid', 'roundid', 'score').from('scores')
    })

}