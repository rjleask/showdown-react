const router = require("express").Router();
const playerController = require("../../controllers/playerController");
const db = require("../../models");

router.route("/players").get(playerController.getPlayers);
// router.route("/search").get(playerController.searchPlayers);
// initial team load ins should be changed later
router.route("/teams").get(playerController.getTeams);
// gets players for whatever the user is searching for
router.post("/search", (req, res) => {
  db.Players.findAll({
    where: {
      playerName: {
        $like: req.body.headers.query + "%"
      }
    }
  }).then(result => res.json(result));
});

module.exports = router;
