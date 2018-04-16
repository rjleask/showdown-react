const router = require("express").Router();
const playerController = require("../../controllers/playerController");

router.route("/players").get(playerController.getPlayers);
router.route("/search/:input").get(playerController.searchPlayers);

module.exports = router;
