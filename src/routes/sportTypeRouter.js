const {Router} = require(`express`)
const { getSportTypes, cretaeNewSporttype, updateSportType, deleteSportType } = require("../controller/sportTypeController")

const sportTyperouter = Router()

sportTyperouter.get("/sport_types/get", getSportTypes)
sportTyperouter.post("/sport_types/new", cretaeNewSporttype)
sportTyperouter.patch("/sport_types/update/:id", updateSportType)
sportTyperouter.delete("/sport_types/delete/:id", deleteSportType)

module.exports = sportTyperouter