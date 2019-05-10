'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hops', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      alpha_acid: {
        type: Sequelize.DECIMAL
      },
      beta_acid: {
        type: Sequelize.DECIMAL
      },
      type: {
        type: Sequelize.STRING
      },
      form: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      origin: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hops');
  }
};