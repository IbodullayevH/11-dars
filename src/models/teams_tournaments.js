const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const tournamentsModel = require("./tournaments");
const teamsModel = require("./teams");

const teams_tournaments_model = sequelize.define("teams_tournaments", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  tournamentsId: {
    type: DataTypes.INTEGER,
    references: {
      model: tournamentsModel,
      key: "id",
    },
  },

  teamsId: {
    type: DataTypes.INTEGER,
    references: {
      model: teamsModel,
      key: "id",
    },
  },
});

module.exports = teams_tournaments_model;
