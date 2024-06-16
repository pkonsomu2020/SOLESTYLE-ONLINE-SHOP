const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Size = sequelize.define('Size', {
  size: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true, // Ensure each size is unique
  },
});

module.exports = Size;