'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [
      {
        name: 'kursi roda',
        stock: 20,
        price: 1000000,
        category: 'alat bantu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'tongkat jalan',
        stock: 30,
        price: 200000,
        category: 'alat bantu',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'N95',
        stock: 10000,
        price: 70000,
        category: 'masker',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Masker duckbil',
        stock: 250,
        price: 50000,
        category: 'masker',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'masker oksigen',
        stock: 10,
        price: 150000,
        category: 'masker',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'hand sanitizer',
        stock: 120,
        price: 55000,
        category: 'permbersih',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'handsoap',
        stock: 75,
        price: 10000,
        category: 'permbersih',
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Products', null, {});
  }

};
