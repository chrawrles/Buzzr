const router = require("express").Router();
const personsController = require("../../controllers/personsController");

// Matches with "/api/restaurants"
router.route("/")
  .get(personsController.findAll)
  .put(personsController.update)
  .post(personsController.create);

// Matches with "/api/restaurants/:id"
router
  .route("/:id")
  .get(personsController.findById)
  .put(personsController.update)
  .delete(personsController.remove);

module.exports = router;
