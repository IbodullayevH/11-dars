const sportTypesModel = require("../models/sportTypes");
const tournamentsModel = require("../models/tournaments");

// get categories
const getSportTypes = async (req, res) => {
  try {
    let sportTypeAll = await sportTypesModel.findAll({
      include: {
        model: tournamentsModel,
        attributes: ["id", "name"],
      },
    });

    res.status(200).send({
      success: true,
      message: "data get sportType all",
      data: sportTypeAll,
    });
  } catch (error) {
    res.status(error.status || 500).send({
      success: false,
      message: error.message || "getSportTypes da error",
    });
  }
};

// create
const cretaeNewSporttype = async (req, res) => {
  try {
    let { name } = req.body;

    let newSportType = await sportTypesModel.create({ name });

    res.status(201).send({
      success: true,
      message: "New sportType created",
      data: newSportType,
    });
  } catch (error) {
    res.status(error.status || 500).send({
      success: false,
      message: error.message || "createSportTypes da error",
    });
  }
};

// update
const updateSportType = async (req, res) => {
  try {
    let { id } = req.params;
    let { name } = req.body;

    let updateSportType = await sportTypesModel.update(
      { name },
      {
        where: {
          id,
        },
      }
    );

    res.status(200).send({
      success: true,
      message: "Successfully SportType model updated",
      updated_sportType: updateSportType,
    });
  } catch (error) {
    res.status(error.status || 500).send({
      success: false,
      message: error.message || "updateSportTypes da error",
    });
  }
};

// delete
const deleteSportType = async (req, res) => {
  try {
    let { id } = req.params;
    let checkID = await sportTypesModel.findAll({ where: { id: id } });

    if (checkID.length === 0) {
      return res.status(404).send({
        success: false,
        message: "Not found",
      });
    }

    let deletedSportType = await sportTypesModel.destroy({
      where: {
        id,
      },
    });

    res.status(200).send({
      success: true,
      message: "sportType deleted",
      data: deletedSportType,
    });
  } catch (error) {
    res.status(error.status || 500).send({
      success: false,
      message: error.message || "deleteSportTypes da error",
    });
  }
};

module.exports = {
  getSportTypes,
  cretaeNewSporttype,
  updateSportType,
  deleteSportType,
};
