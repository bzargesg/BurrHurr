'use strict';
module.exports = (sequelize, DataTypes) => {
  const fermentation_profiles = sequelize.define('fermentation_profiles', {
    name: DataTypes.STRING,
    notes: DataTypes.STRING,
    temp: DataTypes.DECIMAL
  }, {});
  fermentation_profiles.associate = function(models) {
    // associations can be defined here
  };
  return fermentation_profiles;
};