const router = require("express").Router();
const addAthleteController = require("../../controllers/addAthleteController");



// Matches with "/api/add-athlete"

router.route("/")
  .post(addAthleteController.searchCharities)
//   .get(athleteController.searchAthletes)
//   .post(athleteController.create);


// router.route("/asdasd")
//   .post(addAthleteController.searchEIN)
//   .get(athleteController.searchAthletes)
//   .post(athleteController.create);


module.exports = router;