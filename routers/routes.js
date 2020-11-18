const express = require('express')
const router = express.Router()
const app = express()
const autentikasi = require('../middleware/otentikas.js')

const {ProductController, HomeController, CustomerController } = require('../controller/controller.js')

// Home 
router.get('/', HomeController.getProduct) // menampilkan semua barang yang dijual 

// router.use(autentikasi)

//product 


router.get('/product/:id', autentikasi ,ProductController.getInfo)


//account

router.get('/register', CustomerController.registerForm)
router.post('/register', CustomerController.addNewCust)

router.get('/login', CustomerController.loginForm)
router.post('/login', CustomerController.login)

router.get('/profile',autentikasi, CustomerController.getData)

router.get('/cart', autentikasi , CustomerController.cart)




module.exports = router