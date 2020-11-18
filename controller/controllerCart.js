const { product, Customer, Customerproduct } = require('../models')

class CartController {
  static readCart(req, res) {
    Customer.findAll()
     .then(data => {
        res.render('cart', { data })
      })
      .catch(error => {
        res.render('error', { error })
      })
  }

  static remove_product(req, res) {
    Customerproduct.destroy({ where: { productId: req.params.id } })
      .then(() => {
        res.redirect('/carts')
      })
      .catch(error => {
        res.render('error', { error })
      })
  }

  static checkout(req, res) {
    Customer.findByPk(req.session.userId, { include: [{ model: product }] })
      .then(data => {
        // res.send(data)
        console.log(data)
        res.render('checkout', { data, Convert })
      })
      .catch(error => {
        res.render('error', { error })
      })
  }

}

module.exports = CartController