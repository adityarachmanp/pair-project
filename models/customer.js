'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    full_name() {
      return `${this.first_name} ${this.last_name}`
    }
    exactLocation() {
      return this.location.split('_').join(' ')
    }
    static associate(models) {
      // define association here
      Customer.belongsToMany(models.Product ,{through : 'ProductCustomer'})
    }
  };
  Customer.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};