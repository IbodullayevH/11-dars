const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const tournamentsModel = sequelize.define("tournaments", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  sportTypeID: {
    type: DataTypes.INTEGER
  }
});

module.exports = tournamentsModel;
