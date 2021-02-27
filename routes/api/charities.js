const router = require("express").Router();
const charityController = require("../../controllers/charityController");

// Matches with "/api/charities"
router.route("/")
  .get(charityController.findAll)
  .get(charityController.findCharity)
  .post(charityController.create);

// Matches with "/api/charities/:id"
router
  .route("/:id")
  .get(charityController.findById)
  .put(charityController.update)
  .delete(charityController.remove);

module.exports = router;