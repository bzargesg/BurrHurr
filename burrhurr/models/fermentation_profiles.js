'use strict';
module.exports = (sequelize, DataTypes) => {
  const fermentation_profiles = sequelize.define('fermentation_profiles', {
    name: DataTypes.STRING,
    notes: DataTypes.STRING,
    temp: DataTypes.DECIMAL
  }, {});
  fermentation_profiles.associate = function(models) {
    fermentation_profiles.hasMany(models.recipes, {
      foreignKey: 'fermentationID'
    })
  };
  return fermentation_profiles;
};