'use strict';
module.exports = (sequelize, DataTypes) => {
  const hops = sequelize.define('hops', {
    name: DataTypes.STRING,
    alpha_acid: DataTypes.DECIMAL,
    beta_acid: DataTypes.DECIMAL,
    type: DataTypes.STRING,
    form: DataTypes.STRING,
    description: DataTypes.STRING,
    origin: DataTypes.STRING,
    notes: DataTypes.STRING
  }, {});
  hops.associate = function(models) {
    hops.belongsToMany(models.recipes,{
      through: 'hops_rec',
      otherKey: 'recipesID',
      foreignKey: 'hopsID'
    })
  };
  return hops;
};