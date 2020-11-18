const express = require('express')
const Controller = require('../controllers/customerController')

const router = express.Router()

router.get('/', Controller.read)
router.post('/add/:id', Controller.add_item)


module.exports = router