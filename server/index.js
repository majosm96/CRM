require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const DB_QUERY_STRING = process.env.DB
  || 'mongodb://localhost:27017/clientlist'

const clientRoutes = require('./routes/clients')
const app = express()

app.use(morgan('tiny'))

app.set('port', process.env.PORT || 3000)

mongoose.connect(DB_QUERY_STRING)

app.get('/', (req, res) => {
  res.send('CLIENT API HOME PAGE 💩')
})

app.use('/api/v2/clients', clientRoutes)

// app.get('/about', (req, res) => {
//   res.send('ABOUT 💩')
// })

app.listen(app.get('port'), err => {
  if (err) return console.log(`something bad happened 💩 ${err}`)
  console.log(`server listening on ${app.get('port')}`)
})



