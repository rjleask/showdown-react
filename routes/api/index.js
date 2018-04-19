const router = require("express").Router();
const playerController = require("../../controllers/playerController");
const db = require("../../models");

router.route("/players").get(playerController.getPlayers);
// router.route("/search").get(playerController.searchPlayers);
router.post("/search", (req, res) => {
  console.log(req.body.headers.query);
  db.Players.findAll({
    where: {
      playerName: {
        $like: req.body.headers.query + "%"
      }
    }
  }).then(result => res.json(result));
});

module.exports = router;
