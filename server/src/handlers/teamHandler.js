const {
  getTeamsController,
  loadedTeamController,
} = require("../controllers/teamController");

const getTeams = async (req, res) => {
  try {
    let teams = await getTeamsController();
    console.log(teams);
    if (!teams.length) {
      teams = await loadedTeam();
      console.log(teams);
      res.status(200).send(teams);
    } else {
      res.status(200).send(teams);
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const loadedTeam = async (req, res) => {
  try {
    const teams = await loadedTeamController();
    res.status(200).send(teams);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

module.exports = { getTeams, loadedTeam };
