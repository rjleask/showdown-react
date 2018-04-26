var axios = require("axios");

export default {
  getPlayers: function() {
    return axios.get("/api/players");
  },
  searchPlayers: function(input) {
    let config = {
      headers: { query: input }
    };
    return axios.post("/api/search", config);
  },
  getInitialTeams: function() {
    return axios.get("/api/teams");
  }
};
