'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('fermentables', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      gravity_potential: {
        type: Sequelize.DECIMAL
      },
      diastatic_power: {
        type: Sequelize.INTEGER
      },
      total_protein: {
        type: Sequelize.DECIMAL
      },
      moisture: {
        type: Sequelize.DECIMAL
      },
      color: {
        type: Sequelize.INTEGER
      },
      extract_differential: {
        type: Sequelize.DECIMAL
      },
      extract_fine_grind: {
        type: Sequelize.DECIMAL
      },
      extract_coarse_grind: {
        type: Sequelize.DECIMAL
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
    return queryInterface.dropTable('fermentables');
  }
};