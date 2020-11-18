'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ProductCustomers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CustomerId: {
        type: Sequelize.INTEGER,
        references : {
          model: "Customers",
          key : 'id'
        },
        onUpdate : "cascade",
        onDelete : "cascade"
      },
      ProductId: {
        type: Sequelize.INTEGER,
        references : {
          model : 'Products',
          key : 'id'
        },
        onUpdate : 'cascade',
        onDelete : 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ProductCustomers');
  }
};