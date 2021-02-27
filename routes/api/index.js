const router = require("express").Router();
const athleteRoutes = require("./athletes");
const addAthleteRoutes = require("./addAthlete");

// Book routes
router.use("/athletes", athleteRoutes);
router.use("/add-athlete", addAthleteRoutes);

module.exports = router;
