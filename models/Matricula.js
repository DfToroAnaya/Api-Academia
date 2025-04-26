const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Matricula = sequelize.define('Matricula', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  fecha_matricula: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
});

module.exports = Matricula;
