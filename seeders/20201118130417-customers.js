'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Customers', [
      {
        name: 'udin',
        email: "udin@gmail.com",
        address: "jakarta",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'steven',
        email: "steven@gmail.com",
        address: "semarang",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Customers', null, {});
  }
};
