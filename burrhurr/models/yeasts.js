'use strict';
module.exports = (sequelize, DataTypes) => {
  const yeasts = sequelize.define('yeasts', {
    name: DataTypes.STRING,
    lab: DataTypes.STRING,
    type: DataTypes.STRING,
    flocculation: DataTypes.STRING,
    cells: DataTypes.INTEGER,
    min_attenuation: DataTypes.DECIMAL,
    max_attenuation: DataTypes.DECIMAL,
    reuse: DataTypes.INTEGER,
    min_temp: DataTypes.DECIMAL,
    max_temp: DataTypes.DECIMAL,
    notes: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  yeasts.associate = function(models) {
    // associations can be defined here
  };
  return yeasts;
};