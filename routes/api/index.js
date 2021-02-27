const router = require("express").Router();
const athleteRoutes = require("./athletes");
const charityRoutes = require("./charities");

//routes
router.use("/athletes", athleteRoutes);
router.use("/charities", charityRoutes);

module.exports = router;
