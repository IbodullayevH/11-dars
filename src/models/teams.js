const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");

const teamsModel = sequelize.define("teams", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  numberOfMembers: {
    type: DataTypes.INTEGER,
  },
});

module.exports = teamsModel;
