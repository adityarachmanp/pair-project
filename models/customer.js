'use strict';
const {encryptPass} = require('../helper/generatePass')

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Customer.belongsToMany(models.Product ,{through : 'ProductCustomer'})
    }
  };
  Customer.init({
    name: {
      type : DataTypes.STRING,
      validate: {
        notEmpty : {
          msg : 'Silahkan masukkan Nama anda'
        }

      }

    },
    email: {
      type : DataTypes.STRING,
      validate : {
        isEmail : {
          msg: 'Silahkan Masukkan Email anda'
        }
      }
    } ,
    address: {
      type : DataTypes.STRING,
      validate : {
        isEnough(value){
          if(value.length < 15 ){
            throw new Error('Alamat Minimal 15 Karakter ')
          }
        }
      }
    },
    userName : {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : 'SIlahkan isi User Name anda'
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : {
          msg : 'Silahkan isi Password anda'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Customer',
  });

  //Hook
  Customer.beforeCreate( (instance,option) =>{
    console.log('==============Encripting=============')
    instance.password = encryptPass( instance.password)
    console.log('==============Encripted=============')

  } )

  return Customer;
};