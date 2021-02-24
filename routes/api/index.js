const router = require("express").Router();
const athleteRoutes = require("./athletes");
const authRoutes = require("./auth");
const usersRoutes = require("./users");

router.use("/athletes", athleteRoutes);
router.use("/auth", authRoutes);
router.use("/users", usersRoutes);

module.exports = router;
