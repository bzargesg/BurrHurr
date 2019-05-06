'use strict';
module.exports = (sequelize, DataTypes) => {
  const recipes = sequelize.define('recipes', {
    name: DataTypes.STRING,
    notes: DataTypes.STRING,

  }, {});
  recipes.associate = function(models) {
    // associations can be defined here
    recipes.belongsTo(models.water_profile, {
      foreignKey: 'waterID',
    });
    recipes.belongsTo(models.fermentation_profile, {
      foreignKey: 'fermentationID',
    })
    recipes.belongsTo(models.carbonation_profile, {
      foreignKey: 'carbonationID',
    })
    recipes.belongsTo(models.mash_profile, {
      foreignKey: 'mashID',
    })
  };
  return recipes;
};