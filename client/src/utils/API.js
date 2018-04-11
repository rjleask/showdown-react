var axios = require("axios");

export default {
  getPlayers: function() {
    return axios.get("/api/players");
  }
};
