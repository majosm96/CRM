const Todo = require('../models/Client')

function getAll(req, res) {
  Todo.find()
    .exec((err, todos) => {
      if (err) {
        res.status(500)
        res.send(`Ocurrió un error 💩 ${err}`)
      }
      res.status(200)
      res.json(todos)
    })
}

module.exports = {
  getAll
}

