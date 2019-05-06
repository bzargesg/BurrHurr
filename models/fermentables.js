'use strict';
module.exports = (sequelize, DataTypes) => {
  const fermentables = sequelize.define('fermentables', {
    name: DataTypes.STRING,
    gravity_potential: DataTypes.DECIMAL,
    diastatic_power: DataTypes.INTEGER,
    total_protein: DataTypes.DECIMAL,
    moisture: DataTypes.DECIMAL,
    color: DataTypes.INTEGER,
    extract_differential: DataTypes.DECIMAL,
    extract_fine_grind: DataTypes.DECIMAL,
    extract_coarse_grind: DataTypes.DECIMAL,
    notes: DataTypes.STRING
  }, {});
  fermentables.associate = function(models) {
    // associations can be defined here
  };
  return fermentables;
};