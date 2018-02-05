const express = require('express')

const clientsController = require('../controllers/clients.controller')

const router = express.Router()

router.get('/', clientsController.getAll)

module.exports = router
