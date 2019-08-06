'use strict';
module.exports = (sequelize, DataTypes) => {
  const styles = sequelize.define('styles', {
    name: DataTypes.STRING,
    og_min: DataTypes.DECIMAL,
    og_max: DataTypes.DECIMAL,
    fg_min: DataTypes.DECIMAL,
    fg_max: DataTypes.DECIMAL,
    ibu_min: DataTypes.INTEGER,
    ibu_max: DataTypes.INTEGER,
    color_min: DataTypes.INTEGER,
    color_max: DataTypes.INTEGER,
    carbonation_min: DataTypes.DECIMAL,
    carbonation_max: DataTypes.DECIMAL,
    abv_min: DataTypes.DECIMAL,
    abv_max: DataTypes.DECIMAL,
    examples: DataTypes.STRING,
    notes: DataTypes.STRING
  }, {});
  styles.associate = function(models) {
    // associations can be defined here
  };
  return styles;
};