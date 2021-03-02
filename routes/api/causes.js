const router = require("express").Router();
const causesController = require("../../controllers/causesController");

router.route("/")
    .get(causesController.findAll)
    // .get(causesController.searchCauses)
    .post(causesController.create);

router
    .route("/:id")
    .post(causesController.findById)
    .put(causesController.update)
    .delete(causesController.remove);

module.exports = router;
