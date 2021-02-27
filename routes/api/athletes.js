const router = require("express").Router();
const athleteController = require("../../controllers/athleteController");

// Matches with "/api/athletes"
router.route("/")
  .get(athleteController.findCharity)
  .get(athleteController.searchAthletes)
  .post(athleteController.create);

// Matches with "/api/athletes/:id"
router
  .route("/:id")
  .get(athleteController.findById)
  .put(athleteController.update)
  .delete(athleteController.remove);

module.exports = router;
