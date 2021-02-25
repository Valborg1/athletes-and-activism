import axios from "axios";

export default {
  // Gets all athletes
  getAthletes: function() {
    return axios.get("/api/athletes");
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
  searchAthletes: function() {
    fetch("https://thesportsdb.p.rapidapi.com/searchplayers.php?p=Danny%20Welbeck", {
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "c6b5c1a14emsh9e1a9ac4a537b4fp1763c3jsnae3ee4dc04c3",
      "x-rapidapi-host": "thesportsdb.p.rapidapi.com"
    }})
    .then(res => {console.log(res);})
    .catch(err => {console.error(err);})
  }
};



