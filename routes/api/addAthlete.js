const router = require("express").Router();
const addAthleteController = require("../../controllers/addAthleteController");

// Matches with "/api/athletes/add"
router.route("/add")
  .get(addAthleteController.searchCharities)
//   .get(athleteController.searchAthletes)
//   .post(athleteController.create);

module.exports = router;