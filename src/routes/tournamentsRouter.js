const { Router } = require(`express`);
const { getTournaments, createNewTournaments, updateTournament, deleteTournament } = require("../controller/tournamentsController");

const tournamentRouter = Router();

tournamentRouter.get("/tournament/get", getTournaments)
tournamentRouter.post("/tournament/new", createNewTournaments)
tournamentRouter.patch("/tournament/update/:id", updateTournament)
tournamentRouter.delete("/tournament/delete/:id", deleteTournament)

module.exports = tournamentRouter;
