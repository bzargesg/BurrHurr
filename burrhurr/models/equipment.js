'use strict';
module.exports = (sequelize, DataTypes) => {
  const equipment = sequelize.define('equipment', {
    name: DataTypes.STRING,
    volume: DataTypes.DECIMAL,
    boil_off: DataTypes.DECIMAL,
    specific_heat: DataTypes.DECIMAL,
    deadspace: DataTypes.DECIMAL,
    efficiency: DataTypes.DECIMAL,
    cool_loss: DataTypes.DECIMAL,
    trub_loss: DataTypes.DECIMAL,
    hop_utilization: DataTypes.DECIMAL,
    notes: DataTypes.STRING
  }, {});
  equipment.associate = function(models) {
    // associations can be defined here
  };
  return equipment;
};