const { Router } = require("express");
const driverRouter = require("./driverroutes");
const teamRouter = require("./teamroutes");

const router = Router();

router.use("/driver", driverRouter);
router.use("/team", teamRouter);

module.exports = router;
