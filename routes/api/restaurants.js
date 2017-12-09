const router = require("express").Router();
const restaurantsController = require("../../controllers/restaurantsController");

// Matches with "/api/restaurants"
router.route("/")
  .get(restaurantsController.findAll)
  .put(restaurantsController.update)
  .post(restaurantsController.create);

// Matches with "/api/restaurants/:id"
router
  .route("/:id")
  .get(restaurantsController.findById)
  .put(restaurantsController.update)
  .delete(restaurantsController.remove);

module.exports = router;
