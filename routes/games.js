module.exports = function(app){

app.post('/gamesi', function (req, res) {
    var knex = require('../server.js');
    res.send('inserting games')
    knex('games').insert({gamename: res.body.gamename})
  })

app.post('/gamesd', function (req, res) {
    var knex = require('../server.js');
    res.send('deleting games')
    knex('games')
.where('gamename', res.body.gamename)
.del()
    })

app.post('/gamesu', function (req, res) {
    var knex = require('../server.js');
    res.send('updating games')
    knex('games')
.where('gamename', res.body.gamename)
.update({
  gamename: res.body.gamename
})
    })

app.get('/gamess', function (req, res) {
    var knex = require('../server.js');
    res.send("selecting games")
    knex.select('gamename', 'gameid').from('games')
    // knex.select().table('games').then(console.log(res.body))
    })

}