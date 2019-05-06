'use strict';
module.exports = (sequelize, DataTypes) => {
  const water_profiles = sequelize.define('water_profiles', {
    name: DataTypes.STRING,
    ph: DataTypes.DECIMAL,
    calcium: DataTypes.INTEGER,
    magnesium: DataTypes.INTEGER,
    sodium: DataTypes.INTEGER,
    sulfate: DataTypes.INTEGER,
    chloride: DataTypes.INTEGER,
    bicarbonate: DataTypes.INTEGER,
    gypsum: DataTypes.INTEGER,
    salt: DataTypes.INTEGER,
    epsom: DataTypes.INTEGER,
    cacl: DataTypes.INTEGER,
    soda: DataTypes.INTEGER,
    chalk: DataTypes.INTEGER,
    notes: DataTypes.STRING
  }, {});
  water_profiles.associate = function(models) {
    // associations can be defined here
    water_profiles.hasMany(models.recipes, {
      foreignKey: 'waterID'
    })
  };
  return water_profiles;
};