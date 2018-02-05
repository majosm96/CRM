const mongoose = require('mongoose')

const clientSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  position: { type: String, required: true },
  company: { type: String, required: true }
})

const Client = mongoose.model("Client", clientSchema)
module.exports = Client
