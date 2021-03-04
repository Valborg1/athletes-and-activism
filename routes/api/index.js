const router = require("express").Router();
const athleteRoutes = require("./athletes");
const addAthleteRoutes = require("./addAthlete");
const charityRoutes = require("./charities");
const authRoutes = require("./auth");
const usersRoutes = require("./users");

const causesRoutes = require("./causes");


//routes
router.use("/athletes", athleteRoutes);
router.use("/add-athlete", addAthleteRoutes);
router.use("/charities", charityRoutes);
router.use("/auth", authRoutes);
router.use("/users", usersRoutes);

router.use("/causes", causesRoutes);


module.exports = router;
