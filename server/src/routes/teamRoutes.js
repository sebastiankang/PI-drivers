const { Router } = require("express");
const { getTeams } = require("../handlers/teamHandler");

const teamRouter = Router();

teamRouter.get("/", getTeams);

module.exports = teamRouter;
