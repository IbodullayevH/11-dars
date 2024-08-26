require(`dotenv`).config();
const express = require(`express`);
const sequelize = require("./src/config/sequelize");
const sportTyperouter = require("./src/routes/sportTypeRouter");
const tournamentRouter = require("./src/routes/tournamentsRouter");
const teamsRouter = require("./src/routes/teamsRouter");
const routBoshOgriq = require("./src/routes/boshOgriq");

const app = express();
app.use(express.json());
require("./src/models");

sequelize
  .authenticate()
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(`From Server.js file: ${err}`);
  });

sequelize.sync({ force: false });

// routes
app.use(sportTyperouter);
app.use(tournamentRouter);
app.use(teamsRouter);
app.use(routBoshOgriq);

//
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`${port}- is started`);
});
