const db = require("../models");

module.exports = {
  getPlayers: (req, res) => {
    db.Players.findAll({}).then(result => res.json(result));
  },
  searchPlayers: (req, res) => {
    console.log(req.body.query);
    db.Players.findAll({
      where: {
        playerName: {
          $like: req.body.query + "%"
        }
      }
    }).then(result => res.json(result));
  }
};
