const tournamentsModel = require("../models/tournaments");



// get categories
const getTournaments = async (req, res) => {
  try {
    let tournamentAll = await tournamentsModel.findAll();

    res.status(200).send({
      success: true,
      message: "data get tournamnet all",
      data: tournamentAll,
    });
  } catch (error) {
    res.status(error.status || 500).send({
      success: false,
      message: error.message || "getTournament da error",
    });
  }
};



// create
const createNewTournaments = async (req, res) => {
  try {
    let { name, sportTypeID } = req.body;

    let newTournament = await tournamentsModel.create({ name, sportTypeID });

    res.status(201).send({
      success: true,
      message: "New tournament created",
      data: newTournament,
    });
  } catch (error) {
    res.status(error.status || 500).send({
      success: false,
      message: error.message || "createtournament da error",
    });
  }
};



// update
const updateTournament = async (req, res) => {
  try {
    let { id } = req.params;
    let { name, sportTypeID } = req.body;

    let updatetournament = await tournamentsModel.update(
      { name, sportTypeID },
      {
        where: {
          id,
        },
      }
    );

    res.status(200).send({
      success: true,
      message: "Successfully tournament model updated",
      updated_tournament: updatetournament,
    });
  } catch (error) {
    res.status(error.status || 500).send({
      success: false,
      message: error.message || "updateTournament da error",
    });
  }
};




// delete
const deleteTournament = async (req, res) => {
  try {
    let { id } = req.params;
    let checkID = await tournamentsModel.findAll({ where: { id: id } });
    

    if (checkID.length === 0) {
      return res.status(404).send({
        success: false,
        message: "Not found",
      });
    }

    let deleteTournament = await tournamentsModel.destroy({
      where: {
        id,
      },
    });

    res.status(200).send({
      success: true,
      message: "Tournament deleted",
      data: deleteTournament,
    });
  } catch (error) {
    res.status(error.status || 500).send({
      success: false,
      message: error.message || "deleteTournament da error",
    });
  }
};



module.exports = {
  getTournaments,
  createNewTournaments,
  updateTournament,
  deleteTournament
};
