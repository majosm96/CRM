const Client = require('../models/Client')

function getAll(req, res) {
  Client.find()
    .exec((err, clients) => {
      if (err) {
        res.status(500)
        res.send(`Ocurrió un error 💩 ${err}`)
      }
      res.status(200)
      res.json(clients)
    })
}

module.exports = {
  getAll
}

