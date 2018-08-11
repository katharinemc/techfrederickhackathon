

module.exports = function(app){

app.post('/resultsi', function (req, res) {
    var knex = require('../server.js');
    res.send('inserting results')
    knex('results').insert({roundid: res.body.roundid})
    })

app.post('/resultsd', function (req, res) {
    var knex = require('../server.js');
    res.send('deleting results')
    knex('results')
.where('roundid', res.body.roundid)
.del()
    })

app.post('/resultsu', function (req, res) {
    var knex = require('../server.js');
    res.send('updating results')
    knex('results')
.where('roundid', res.body.roundid)
.update({
  roundid: res.body.roundid
})
    })

app.get('/resultss', function (req, res) {
    var knex = require('../server.js');
    res.send('selecting results')
    knex.select('roundid', 'rtimestamp', 'teamid', 'gamenameid').from('results')
    })

}