'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('equipment', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      volume: {
        type: Sequelize.DECIMAL
      },
      boil_off: {
        type: Sequelize.DECIMAL
      },
      specific_heat: {
        type: Sequelize.DECIMAL
      },
      deadspace: {
        type: Sequelize.DECIMAL
      },
      efficiency: {
        type: Sequelize.DECIMAL
      },
      cool_loss: {
        type: Sequelize.DECIMAL
      },
      trub_loss: {
        type: Sequelize.DECIMAL
      },
      hop_utilization: {
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
    return queryInterface.dropTable('equipment');
  }
};