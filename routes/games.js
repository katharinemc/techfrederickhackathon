var knex = require('../server.js');

module.exports = function(app){

app.post('/gamesi', function (req, res) {
    res.send('games')
    knex('books').insert({title: 'Slaughterhouse Five'})
  })

app.post('/gamesd', function (req, res) {
    res.send('games')
    knex('accounts')
.where('activated', false)
.del()
    })

app.post('/gamesu', function (req, res) {
    res.send('games')
    knex('books')
.where('published_date', '<', 2000)
.update({
  status: 'archived',
  thisKeyIsSkipped: undefined
})
    })

app.get('/gamess', function (req, res) {
    res.send('games')
    knex.select('title', 'author', 'year').from('books')
    })

}