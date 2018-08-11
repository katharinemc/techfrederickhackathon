var con = require('../server.js');

module.exports = function(app){

app.post('/resultsi', function (req, res) {
    res.send('results')
    knex('books').insert({title: 'Slaughterhouse Five'})
    })

app.post('/resultsd', function (req, res) {
    res.send('results')
    knex('accounts')
.where('activated', false)
.del()
    })

app.post('/resultsu', function (req, res) {
    res.send('results')
    knex('books')
.where('published_date', '<', 2000)
.update({
  status: 'archived',
  thisKeyIsSkipped: undefined
})
    })

app.get('/resultss', function (req, res) {
    res.send('results')
    knex.select('title', 'author', 'year').from('books')
    })

}