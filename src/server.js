const express = require('express')
const hangman = require('../hangman')

const app = express()

app.locals.hangman

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', {
    hangman: hangman
  })
})

app.listen(8080, () => {
  console.log('Server start on port, 8080')
})
