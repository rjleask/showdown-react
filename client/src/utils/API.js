var axios = require("axios");

export default {
  getPlayers: function() {
    return axios.get("/api/players");
  },
  searchPlayers: function(input) {
    return axios.get("/api/search/" + input);
  }
};
