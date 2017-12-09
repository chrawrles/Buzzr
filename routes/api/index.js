const router = require("express").Router();
const restaurantRoutes = require("./restaurants");
const personRoutes = require("./persons");

// Restaurant routes
router.use("/restaurants", restaurantRoutes);
router.use("/persons", personRoutes);

module.exports = router;
