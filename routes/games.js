var knex = require('../server.js');

module.exports = function(app){

app.post('/gamesi', function (req, res) {
    res.send('games')
    knex('games').insert({gamename: res.body.gamename})
  })

app.post('/gamesd', function (req, res) {
    res.send('games')
    knex('games')
.where('gamename', res.body.gamename)
.del()
    })

app.post('/gamesu', function (req, res) {
    res.send('games')
    knex('games')
.where('gamename', res.body.gamename)
.update({
  gamename: res.body.gamename
})
    })

app.get('/gamess', function (req, res) {
    res.send('games')
    knex.select('gamename', 'gameid').from('games')
    })

}