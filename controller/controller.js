const { json } = require('express');
const {Customer,Product, ProductCustomer, sequelize}  = require('../models/index.js')
const {getPass} = require('../helper/generatePass')
const { Op } = require("sequelize");
const product = require('../models/product.js');

class CustomerController {

    static getData(req,res){

        const name = req.session.name

        Customer.findAll({
            where : {
                name
            }
        })
            .then(result =>{
                res.render('customerlist', {customer : result})
            })
            .catch(err =>{
                res.send(err)
            })
    }

    static registerForm(req,res){
        let error = null ;
        if(req.query.error){
            console.log('================REGIS FORM==============')
            error = JSON.parse(req.query.error)
        }
        console.log(error)
        res.render('registerForm', {error })

    }

    static addNewCust(req,res){
        const data = {
            name : req.body.name,
            email: req.body.email,
            address : req.body.address,
            userName : req.body.userName,
            password: req.body.password
        }
        console.log('===========Get New Data============\n',data)
        Customer.create(data)
            .then( result =>{
                res.redirect('/')
            })
            .catch(err =>{
                console.log(err.message)
                let error = err.message.split('\n')
                error = error.map(element =>{
                    return element.split(':')[1].split(',')[0]
                })
                console.log(error)

                error = JSON.stringify(error)
                console.log(error)
                res.redirect(`/register?error=${error}`)
            })
    }

    static loginForm(req,res){
        let error = null 
        if(req.query.error){
            console.log('=========Error login===========')
            error = req.query.error
        }
        res.render('loginForm', {error})
    }

    static login(req,res){
        console.log('===============Login Data============\n',req.body)
        const dataLogin = {
            userName : req.body.userName,
            password : req.body.password
        }
        Customer.findOne( {
            where : {
                userName: req.body.userName
            }
        }).then( result =>{
            console.log(req.session)
            if(!req.session.name && getPass(req.body.password,result.password)){
                console.log('============Cek Session=========')
                req.session.custId = result.id
                req.session.name = result.name
                console.log(req.session)
                res.redirect('/')
            }

        }).catch(err=>{
            res.redirect('/login?error=password/username salah')
            // res.send(err)
        })
    }

    static logout(req,res){
        req.session.destroy( err =>{
            console.log('=========Try to Log out===========')
            if(err){
                res.send(err)
            }else {
                console.log('=========Succes to Log out===========')

                res.redirect('/')
            }
        })
        
    }

    static cart(req,res){
        const custId = req.session.custId

        ProductCustomer.findAll({
        where :{
                CustomerId : custId
            },
            include : [Product]
        })
        .then( result =>{
            res.render('cart', {data:result})
            console.log(result.id)
            // res.send(result)
        })
        .catch( err =>{
            console.log('===========ERROR Cart========')
            res.send(err)
        })
    }

    static deleteFromCart(req,res){
        console.log('================Try to delete============')
        const prodId = req.params.id 
        console.log(prodId)
        let name = req.session.name
        console.log(name)
        let custId = req.session.custId

        ProductCustomer.destroy({
            where :{
                [Op.and] : [{ProductId: prodId},{CustomerId : custId} ]
            }
        }).then(result =>{
            res.redirect('/cart')
        }).catch(err=>{
            res.send(err)
        })
    }
}




class ProductController {

    static getData(req,res){
        
        Product.findAll()
            .then(result =>{
                console.log('==============Home==============')
                res.render('prodList', {prod:result, logout:0})
            })
            .catch(err =>{
                res.send(err)
            })
    }

    static getInfo(req,res){
        const id = req.params.id
        console.log('============Get Info===============')

        Product.findByPk(id)
        .then( result =>{
            console.log('==============Get Product Info============\n',result)
            // res.send(result)
            res.render('productInfo', {data:result})
        })
        .catch(err =>{
            res.send(err)
        })
    }

    static addCart(req,res){
        const prodId = req.params.id
        const name = req.session.name
        let custId = null
        console.log('===================ADD CART============')

        Customer.findOne( {
            where : {
                name
            }
        }).then (result =>{
            custId = result.id
            let newData = {
                CustomerId : custId,
                ProductId : prodId
            }
            return ProductCustomer.create(newData)
        }).then(result =>{
            res.redirect('/')
            // res.send(result)
        })
        .catch (err =>{
            res.send (err)
        })
    }

}

class HomeController {
    static getProduct(req,res){

        Product.findAll()
            .then(result =>{
                let name = null 
                console.log('===========GEt product==========')
                if(req.session.name){
                    name = req.session.name
                }
                // res.send(result)
                res.render('prodList', {prod :result, logout: null , name:name, Product})
            })
            .catch(err =>{
                res.send(err)
            })
        
    }
}

module.exports = {HomeController, ProductController, CustomerController}