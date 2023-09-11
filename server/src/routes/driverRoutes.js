const { Router } = require("express");
const {
  getDrivers,
  postDriver,
  getDriversById,
} = require("../handlers/driverHandler");

const driverRouter = Router();

//rutas
driverRouter.get("/", getDrivers);

driverRouter.post("/", postDriver);

driverRouter.get("/:id", getDriversById);

module.exports = driverRouter;
