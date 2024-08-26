const teamsModel = require("../models/teams");



// get teams
const getTeams = async (req, res) => {
  try {
    let teamstAll = await teamsModel.findAll();

    res.status(200).send({
      success: true,
      message: "data get teams all",
      data: teamstAll,
    });
  } catch (error) {
    res.status(error.status || 500).send({
      success: false,
      message: error.message || "geteams da error",
    });
  }
};




// create
const createNewTeam = async (req, res) => {
  try {
    let { name, numberOfMembers } = req.body;

    let newTeam = await teamsModel.create({ name, numberOfMembers });

    res.status(201).send({
      success: true,
      message: "New team created",
      data: newTeam,
    });
  } catch (error) {
    res.status(error.status || 500).send({
      success: false,
      message: error.message || "createTeams da error",
    });
  }
};




// update
const updateTeam = async (req, res) => {
  try {
    let { id } = req.params;
    let { name, numberOfMembers } = req.body;

    let updateTeam = await teamsModel.update(
      { name, numberOfMembers },
      {
        where: {
          id,
        },
      }
    );

    res.status(200).send({
      success: true,
      message: "Successfully teams model updated",
      updated_teams: updateTeam,
    });
  } catch (error) {
    res.status(error.status || 500).send({
      success: false,
      message: error.message || "updateTeams da error",
    });
  }
};





// delete
const deleteTeam = async (req, res) => {
  try {
    let { id } = req.params;
    let checkID = await teamsModel.findAll({ where: { id: id } });
    

    if (checkID.length === 0) {
      return res.status(404).send({
        success: false,
        message: "Not found",
      });
    }

    let deleteTeam = await teamsModel.destroy({
      where: {
        id,
      },
    });

    res.status(200).send({
      success: true,
      message: "Team deleted",
        data: deleteTeam,
    });
  } catch (error) {
    res.status(error.status || 500).send({
      success: false,
      message: error.message || "deleteTeam da error",
    });
  }
};


module.exports = {
  getTeams,
  createNewTeam,
  updateTeam,
  deleteTeam,
};
