const express = require('express')
const router = express.Router()
const cartRouter = require('./cart')


const {ProductController, HomeController, CustomerController } = require('../controller/controller.js')

// Home 
router.get('/', HomeController.getProduct) // menampilkan semua barang yang dijual 
// router.use('/customers', customerRouter)
router.use('/carts', cartRouter)




module.exports = router