'use strict';
module.exports = (sequelize, DataTypes) => {
  const carbonation_profiles = sequelize.define('carbonation_profiles', {
    name: DataTypes.STRING,
    sugar: DataTypes.DECIMAL,
    volumes: DataTypes.DECIMAL,
    notes: DataTypes.STRING
  }, {});
  carbonation_profiles.associate = function(models) {
    carbonation_profiles.hasMany(models.recipes, {
      foreignKey: 'carbonationID'
    })
  };
  return carbonation_profiles;
};