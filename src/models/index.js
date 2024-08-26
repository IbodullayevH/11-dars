const sportTypesModel = require("./sportTypes");
const teamsModel = require("./teams");
const Sport_types_tournaments_model = require(`./sportTypes_tournaments`)
const tournamentsModel = require("./tournaments");
const teams_tournaments_model = require("./teams_tournaments");


module.exports = {
  spt: sportTypesModel.belongsToMany(tournamentsModel, {
    through: Sport_types_tournaments_model,
  }),
  t: tournamentsModel.belongsToMany(sportTypesModel, {
    through: Sport_types_tournaments_model,
  }),
  tm: tournamentsModel.belongsToMany(teamsModel, {
    through: teams_tournaments_model,
  }),
  tr: teamsModel.belongsToMany(tournamentsModel, {
    through: teams_tournaments_model,
  }),
  
};
