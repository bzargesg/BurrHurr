'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('water_profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      ph: {
        type: Sequelize.DECIMAL
      },
      calcium: {
        type: Sequelize.INTEGER
      },
      magnesium: {
        type: Sequelize.INTEGER
      },
      sodium: {
        type: Sequelize.INTEGER
      },
      sulfate: {
        type: Sequelize.INTEGER
      },
      chloride: {
        type: Sequelize.INTEGER
      },
      bicarbonate: {
        type: Sequelize.INTEGER
      },
      gypsum: {
        type: Sequelize.INTEGER
      },
      salt: {
        type: Sequelize.INTEGER
      },
      epsom: {
        type: Sequelize.INTEGER
      },
      cacl: {
        type: Sequelize.INTEGER
      },
      soda: {
        type: Sequelize.INTEGER
      },
      chalk: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('water_profiles');
  }
};