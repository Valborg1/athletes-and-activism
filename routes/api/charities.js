const router = require("express").Router();
const charityController = require("../../app/controllers/charityController");

// Matches with "/api/charities"

router
.route("/")
.get(charityController.findAll)
.post(charityController.create);


router
  .route("/cause")
  .post(charityController.findCause)
  // .get(causesController.searchCauses)
  .post(charityController.create);

  router
  .route("/athletes")
  .post(charityController.findAthletes)
  // .get(causesController.searchCauses)
  .post(charityController.create);

  router
  .route("/:id")
  .get(charityController.findById)
  .put(charityController.update)
  .delete(charityController.remove);






 


module.exports = router;
