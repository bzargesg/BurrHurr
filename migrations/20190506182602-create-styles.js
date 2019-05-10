'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('styles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      og_min: {
        type: Sequelize.DECIMAL
      },
      og_max: {
        type: Sequelize.DECIMAL
      },
      fg_min: {
        type: Sequelize.DECIMAL
      },
      fg_max: {
        type: Sequelize.DECIMAL
      },
      ibu_min: {
        type: Sequelize.INTEGER
      },
      ibu_max: {
        type: Sequelize.INTEGER
      },
      color_min: {
        type: Sequelize.INTEGER
      },
      color_max: {
        type: Sequelize.INTEGER
      },
      carbonation_min: {
        type: Sequelize.DECIMAL
      },
      carbonation_max: {
        type: Sequelize.DECIMAL
      },
      abv_min: {
        type: Sequelize.DECIMAL
      },
      abv_max: {
        type: Sequelize.DECIMAL
      },
      examples: {
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
    return queryInterface.dropTable('styles');
  }
};