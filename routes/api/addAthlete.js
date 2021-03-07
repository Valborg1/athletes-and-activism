const router = require("express").Router();
const addAthleteController = require("../../app/controllers/addAthleteController");


// Matches with "/api/add-athlete"

router.route("/")
  .post(addAthleteController.searchCharities)
//   .get(athleteController.searchAthletes)
//   .post(athleteController.create);

router.route("/charity-and-cause")
  // .post(addAthleteController.test)
  .post(addAthleteController.charityAndCause)

module.exports = router;