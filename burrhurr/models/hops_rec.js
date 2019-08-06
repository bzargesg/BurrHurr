'use strict';
module.exports = (sequelize, DataTypes) => {
  const hops_rec = sequelize.define('hops_rec', {
    hopID: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    recipeID: DataTypes.INTEGER
  }, {});
  hops_rec.associate = function(models) {
    hops_rec.belongsTo(models.hops, {
      foreignKey: 'hopsID',
      onDelete: 'CASCADE'
    })
    hops_rec.belongsTo(models.recipes, {
      foreignKey: 'recipesID',
      onDelete: 'CASCADE'
    })
  };
  return hops_rec;
};