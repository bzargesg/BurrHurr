'use strict';
module.exports = (sequelize, DataTypes) => {
  const recipes = sequelize.define('recipes', {
    name: DataTypes.STRING,
    notes: DataTypes.STRING,
    waterID: DataTypes.INTEGER,
    fermentationID: DataTypes.INTEGER,
    carbonationID: DataTypes.INTEGER,
    mashID: DataTypes.INTEGER,
  }, {});
  recipes.associate = function(models) {
    // associations can be defined here
    recipes.belongsTo(models.water_profiles, {
      foreignKey: 'waterID',
    });
    recipes.belongsTo(models.fermentation_profiles, {
      foreignKey: 'fermentationID',
    })
    recipes.belongsTo(models.carbonation_profiles, {
      foreignKey: 'carbonationID',
    })
    recipes.belongsTo(models.mash_profile, {
      foreignKey: 'mashID',
    })
    recipes.belongsToMany(models.fermentables,{
      through: 'ferm_rec',
      otherKey: 'fermentablesID',
      foreignKey: 'recipesID'
    })
    recipes.belongsToMany(models.hops,{
      through: 'ferm_rec',
      otherKey: 'hopsID',
      foreignKey: 'recipesID'
    })
  };
  return recipes;
};