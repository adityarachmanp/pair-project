'use strict';

let data = require('../product.json')

data.forEach( element =>{
  element['createdAt'] = new Date()
  element['updatedAt'] = new Date()

})


module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', data, {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down:  (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', data, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
