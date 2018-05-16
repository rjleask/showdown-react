const router = require("express").Router();
const playerController = require("../../controllers/playerController");
const db = require("../../models");

router.route("/players").get(playerController.getPlayers);
// router.route("/search").get(playerController.searchPlayers);
// initial team load ins should be changed later
router.route("/teams").get(playerController.getTeams);
router.route("/pitchers").get(playerController.getPitchers);
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
router.post("/addPlayer", (req, res) => {
  db.Pitchers.create({
    playerID: req.body.playerID,
    playerName: req.body.playerName,
    team: req.body.team,
    control: req.body.control,
    IP: req.body.IP,
    position: req.body.position,
    cost: req.body.cost,
    outPU: req.body.outPU,
    outGB: req.body.outGB,
    outFB: req.body.outFB,
    outSO: req.body.outSO,
    walk: req.body.walk,
    single: req.body.single,
    double: req.body.double,
    homer: req.body.homer,
    pic: req.body.pic
  });
});

module.exports = router;
