'use strict';
module.exports = (sequelize, DataTypes) => {
  const mash_profile = sequelize.define('mash_profile', {
    name: DataTypes.STRING,
    temperature: DataTypes.DECIMAL,
    time: DataTypes.INTEGER
  }, {});
  mash_profile.associate = function(models) {
    mash_profile.hasMany(models.recipes, {
      foreignKey: 'mashID'
    })
  };
  return mash_profile;
};