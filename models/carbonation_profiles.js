'use strict';
module.exports = (sequelize, DataTypes) => {
  const carbonation_profiles = sequelize.define('carbonation_profiles', {
    name: DataTypes.STRING,
    sugar: DataTypes.DECIMAL,
    volumes: DataTypes.DECIMAL,
    notes: DataTypes.STRING
  }, {});
  carbonation_profiles.associate = function(models) {
    // associations can be defined here
  };
  return carbonation_profiles;
};