'use strict';
module.exports = (sequelize, DataTypes) => {
  const ferm_rec = sequelize.define('ferm_rec', {
    fermentablesID: DataTypes.INTEGER,
    quantity: DataTypes.DECIMAL,
    recipesID: DataTypes.INTEGER
  }, {});
  ferm_rec.associate = function(models) {
    // associations can be defined here
    ferm_rec.belongsTo(models.fermentables,{
      foreignKey: 'fermentablesID',
      onDelete: 'CASCADE'
    })
    ferm_rec.belongsTo(models.recipes,{
      foreignKey: 'recipesID',
      onDelete: 'CASCADE'
    })
  };
  return ferm_rec;
};