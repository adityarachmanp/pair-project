'use strict';

const Chart = require("chart.js")

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsToMany(models.Customer , {through : "ProductCustomer"})
    }

    changePrice(number){
       let currency = number.toLocaleString('id', {style:'currency',currency:'IDR'}).split('IDR')[1]
       return `Rp ${currency}`
    }

    static coba(){
      console.log('ini static')
    }
    static getNameOfproduct(result){
      console.log('=========masuk di static=======')
      let empt = {}
      for (let i = 0 ; i< result.length ; i++){
          let category = result[i].category
          if(!empt[category]){
              empt[category] = 1
          }else {
              empt[category]++
          }
      }
      console.log(result)
      return empt
    }
  };
  Product.init({
    name: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    category: DataTypes.STRING,
    picture: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};