const db = require("../models");

module.exports = {
  getPlayers: (req, res) => {
    db.Players.findAll({}).then(result => res.json(result));
  },
  searchPlayers: (req, res) => {
    db.Players.findAll({
      where: {
        playerName: {
          $ilike: "%" + req.body.input
        }
      }
    }).then(result => res.json(result));
  }
};
