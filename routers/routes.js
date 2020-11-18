const express = require('express')
const router = express.Router()


const {ProductController, HomeController, CustomerController } = require('../controller/controller.js')

// Home 
router.get('/', HomeController.getProduct) // menampilkan semua barang yang dijual 





module.exports = router