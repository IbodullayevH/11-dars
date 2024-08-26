const { Router } = require(`express`);
const {
  createSportTypeAndTournaments,
  deleteSportTypeAndTournaments,
  createTeamsTournaments,
} = require("../controller/sporTypeAndtournamentsCtrl");

const routBoshOgriq = Router();

routBoshOgriq.post(
  "/createSportTypeAndTournaments/create",
  createSportTypeAndTournaments
);
routBoshOgriq.delete(
  "/createSportTypeAndTournaments/delete/:id",
  deleteSportTypeAndTournaments
);

routBoshOgriq.post("/createTeamsAndTournaments/create", createTeamsTournaments);
routBoshOgriq.post("/createTeamsAndTournaments/delete/:id");

module.exports = routBoshOgriq;
