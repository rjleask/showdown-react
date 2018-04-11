const router = require("express").Router();
const playerController = require("../../controllers/playerController");

router.route("/players").get(playerController.getPlayers);

module.exports = router;
