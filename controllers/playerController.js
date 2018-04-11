const db = require("../models");

module.exports = {
  getPlayers: (req, res) => {
    db.Players.findAll({}).then(result => res.json(result));
  }
};
