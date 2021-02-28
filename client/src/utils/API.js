import axios from "axios";
const ATHURL = "https://thesportsdb.p.rapidapi.com/searchplayers.php?p="
const APIKEY = "6b24b1384fmshf59a581bd70a69ap1d4756jsn25a12c1f048e"

export default {
  // Gets all athletes
  getAthletes: function() {
    return axios.get("/api/athletes");
  },

  searchAthletes: function(query) {
    return axios.get(ATHURL,  {params: {p: "Alex Smith"},
    headers: {
      'x-rapidapi-key': APIKEY,
      'x-rapidapi-host': 'thesportsdb.p.rapidapi.com',
      useQueryString: false
    }})
  },
  // Gets the athlete with the given id
  getathlete: function(id) {
    return axios.get("/api/athletes/" + id);
  },
  // Deletes the athlete with the given id
  deleteathlete: function(id) {
    return axios.delete("/api/athletes/" + id);
  },
  // Saves a athlete to the database
  saveathlete: function(athleteData) {
    return axios.post("/api/athletes", athleteData);
  },
  addFavorite: function(id) {
    return axios.get("/api/users/favorites/" + id);
  },
};
