const express = require('express')
const app = express() 
const port = 3030

app.get('/', (request, response) => { 
  response.send('Hello from Express!') 
})

app.get('/about', (request, response) => { 
  response.send('About!') 
})

app.listen(port, (err) => { 
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})
