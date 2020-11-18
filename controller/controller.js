const {Customer,Product}  = require('../models/index.js')

class CustomerController {

    static getData(req,res){

        Customer.findAll()
            .then(result =>{
                res.render('customerlist', {cust : result})
            })
            .catch(err =>{
                res.send(err)
            })


    }
}




class ProductController {

    static getData(req,res){
        
        Product.findAll()
            .then(result =>{
                res.render('prodList', {prod:result})
            })
            .catch(err =>{
                res.send(err)
            })
    }
}

class HomeController {

    static getProduct(req,res){
        Product.findAll()
            .then(result =>{
                console.log('===========GEt product==========')
                res.render('prodList', {prod :result})
            })
            .catch(err =>{
                res.send(err)
            })
        
    }
}

module.exports = {HomeController, ProductController, CustomerController}