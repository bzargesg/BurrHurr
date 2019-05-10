'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('yeasts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      lab: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      flocculation: {
        type: Sequelize.STRING
      },
      cells: {
        type: Sequelize.INTEGER
      },
      min_attenuation: {
        type: Sequelize.DECIMAL
      },
      max_attenuation: {
        type: Sequelize.DECIMAL
      },
      reuse: {
        type: Sequelize.INTEGER
      },
      min_temp: {
        type: Sequelize.DECIMAL
      },
      max_temp: {
        type: Sequelize.DECIMAL
      },
      notes: {
        type: Sequelize.STRING
      },
      description: {
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
    return queryInterface.dropTable('yeasts');
  }
};