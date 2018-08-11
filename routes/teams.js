var con = require('../server.js');

module.exports = function(app){

app.post('/teamsi', function (req, res) {
  res.send('teams')
  knex('books').insert({title: 'Slaughterhouse Five'})
})

app.post('/teamsd', function (req, res) {
  res.send('teams')
  knex('accounts')
.where('activated', false)
.del()
})

app.post('/teamsu', function (req, res) {
  res.send('teams')
  knex('books')
.where('published_date', '<', 2000)
.update({
  status: 'archived',
  thisKeyIsSkipped: undefined
})
})

app.get('/teamss', function (req, res) {
  res.send('teams')
  knex.select('title', 'author', 'year').from('books')
})

}