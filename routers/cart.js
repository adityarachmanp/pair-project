const express = require('express')
const Controller = require('../controller/controllerCart')


const router = express.Router()

router.get('/', Controller.readCart)
router.get('/remove/:id', Controller.remove_product)
router.get('/checkout', Controller.checkout)


module.exports = router