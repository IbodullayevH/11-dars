const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize");
const tournamentsModel = require("./tournaments");
const sportTypesModel = require("./sportTypes");

const Sport_types_tournaments_model = sequelize.define(
  "sportTypes_tournaments",
  {
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

    sporttypesId: {
      type: DataTypes.INTEGER,
      references: {
        model: sportTypesModel,
        key: "id",
      },
    },
  }
);

module.exports = Sport_types_tournaments_model;
