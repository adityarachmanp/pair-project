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

router.get('/addCart/:id',autentikasi, ProductController.addCart)
//account

router.get('/register', CustomerController.registerForm)
router.post('/register', CustomerController.addNewCust)

router.get('/login', CustomerController.loginForm)
router.post('/login', CustomerController.login)

router.get('/logout', autentikasi, CustomerController.logout)

router.get('/profile',autentikasi, CustomerController.getData)

router.get('/cart', autentikasi , CustomerController.cart)
router.get('/cart/delete/:id',autentikasi,CustomerController.deleteFromCart)



module.exports = router