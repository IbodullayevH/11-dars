const { Router } = require(`express`);
const { getTeams, createNewTeam, updateTeam, deleteTeam } = require("../controller/teamsController");

const teamsRouter = Router();

teamsRouter.get("/teams/get", getTeams)
teamsRouter.post("/teams/new", createNewTeam)
teamsRouter.patch("/teams/update/:id", updateTeam)
teamsRouter.delete("/teams/delete/:id", deleteTeam)

module.exports = teamsRouter;
