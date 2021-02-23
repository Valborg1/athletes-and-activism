const router = require("express").Router();
const athleteRoutes = require("./athletes");

// Book routes
router.use("/athletes", athleteRoutes);

module.exports = router;
