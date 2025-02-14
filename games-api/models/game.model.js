const { DataTypes } = require('sequelize');
const sequelize = require('../util/database.util');
const USER_ROLE = require('../enums/role.enum');

const Game = sequelize.define('Games', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(60),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
});

module.exports = Game;