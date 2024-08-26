const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const sportTypesModel = sequelize.define("sport_types", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = sportTypesModel;
