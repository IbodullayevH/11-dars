const sportTypesModel = require("../models/sportTypes");
const Sport_types_tournaments_model = require("../models/sportTypes_tournaments");
const teamsModel = require("../models/teams");
const teams_tournaments_model = require("../models/teams_tournaments");
const tournamentsModel = require("../models/tournaments");

const createSportTypeAndTournaments = async (req, res) => {
  try {
    let { tournamentsId, sporttypesId } = req.body;

    let checkIdForSportType = await sportTypesModel.findAll({
      where: { id: sporttypesId },
    });

    let checkIdForTournament = await tournamentsModel.findAll({
      where: { id: tournamentsId },
    });

    if (checkIdForSportType.length == 0 || checkIdForTournament.length == 0) {
      return res.status(404).send({
        success: false,
        message: "Not found id",
      });
    }
    let addData = await Sport_types_tournaments_model.create({
      tournamentsId,
      sporttypesId,
    });

    res.status(201).send({
      success: true,
      message: "created",
      data: {
        id: addData.id,
        tournamentsId: {
          id: tournamentsId,
          name: checkIdForTournament[0].dataValues.name,
        },
        sporttypesId: {
          id: sporttypesId,
          name: checkIdForSportType[0].dataValues.name,
        },
        updatedAt: addData.updatedAt,
        createdAt: addData.createdAt,
      },
    });
  } catch (error) {
    res.status(error.status || 500).send({
      success: false,
      message: error.message,
    });
  }
};

// delete
const deleteSportTypeAndTournaments = async (req, res) => {
  try {
    let { id } = req.params;
    let checkID = await Sport_types_tournaments_model.findAll({
      where: { id: id },
    });

    if (checkID.length === 0) {
      return res.status(404).send({
        success: false,
        message: "Not found",
      });
    }

    let deleteData = await Sport_types_tournaments_model.destroy({
      where: {
        id,
      },
    });

    res.status(200).send({
      success: true,
      message: "deleted",
      data: deleteData,
    });
  } catch (error) {
    res.status(error.status || 500).send({
      success: false,
      message: error.message,
    });
  }
};

const createTeamsTournaments = async (req, res) => {
  try {
    let { tournamentsId, teamsId } = req.body;
    // console.log(req.body);
    
    let checkIdForTeams = await teamsModel.findAll({
      where: { id: teamsId },
    });
  
  
    let checkIdForTournament = await tournamentsModel.findAll({
      where: { id: tournamentsId },
    });
  
  
    if (checkIdForTeams.length == 0 || checkIdForTournament.length == 0) {
      return res.status(404).send({
        success: false,
        message: "Not found id",
      });
    }

    
    let addData = await teams_tournaments_model.create({
      tournamentsId,
      teamsId,
    });
    console.log(addData);
    
    res.status(201).send({
      success: true,
      message: "created",
      data: {
        id: addData.id,
        tournamentsId: {
          id: tournamentsId,
          name: checkIdForTournament[0].dataValues.name,
        },
        teamsId: {
          id: teamsId,
          name: checkIdForTeams[0].dataValues.name,
        },
        updatedAt: addData.updatedAt,
        createdAt: addData.createdAt,
      },
    });
  } catch (error) {
    res.status(error.status || 500).send({
      success: false,
      message: error.message,
    });
  }
};

// delete
const deleteTeamsTournaments = async (req, res) => {
  try {
    let { id } = req.params;
    let checkID = await Sport_types_tournaments_model.findAll({
      where: { id: id },
    });

    if (checkID.length === 0) {
      return res.status(404).send({
        success: false,
        message: "Not found",
      });
    }

    let deleteData = await Sport_types_tournaments_model.destroy({
      where: {
        id,
      },
    });

    res.status(200).send({
      success: true,
      message: "deleted",
      data: deleteData,
    });
  } catch (error) {
    res.status(error.status || 500).send({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createSportTypeAndTournaments,
  deleteSportTypeAndTournaments,
  createTeamsTournaments,
  deleteTeamsTournaments,
};
