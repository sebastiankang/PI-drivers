const axios = require("axios");
const { Team } = require("../db");

const getTeamsController = async () => {
  //get a la db
  const teamsDb = await Team.findAll();

  return teamsDb;
};

const loadedTeamController = async () => {
  //get a la api trayendo solo teams
  //crear un texto con todos los teams
  const drivers = (await axios.get("http://localhost:5000/drivers")).data;

  let teamsCargados = [];
  //logica para corregir teams, ej: "teams": "Porsche, Mercedes AMG, Renault"
  for (let i = 0; i < drivers.length; i++) {
    if (drivers[i].teams) {
      let team = drivers[i].teams?.split(",");

      for (let j = 0; j < team.length; j++) {
        let currentTeam = team[j];
        if (currentTeam[0] === " ") {
          currentTeam = currentTeam.slice(1);
        }
        //el find or create para cuando no encuentra un team que lo cree
        const teamCargado = await Team.findOrCreate({
          where: { name: currentTeam },
        });
        teamsCargados = [...teamsCargados, ...teamCargado];
      }
    }
  }
  return teamsCargados;
};

module.exports = { getTeamsController, loadedTeamController };
