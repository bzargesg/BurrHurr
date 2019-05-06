'use strict';
module.exports = (sequelize, DataTypes) => {
  const hops_rec = sequelize.define('hops_rec', {
    hopID: DataTypes.INTEGER,
    recipeID: DataTypes.INTEGER
  }, {});
  hops_rec.associate = function(models) {
    // associations can be defined here
  };
  return hops_rec;
};