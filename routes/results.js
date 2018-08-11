var con = require('../server.js');

module.exports = function(app){

app.post('/resultsi', function (req, res) {
    res.send('results')
    knex('results').insert({roundid: res.body.roundid})
    })

app.post('/resultsd', function (req, res) {
    res.send('results')
    knex('results')
.where('roundid', res.body.roundid)
.del()
    })

app.post('/resultsu', function (req, res) {
    res.send('results')
    knex('results')
.where('roundid', res.body.roundid)
.update({
  roundid: res.body.roundid
})
    })

app.get('/resultss', function (req, res) {
    res.send('results')
    knex.select('roundid', 'rtimestamp', 'teamid', 'gamenameid').from('results')
    })

}