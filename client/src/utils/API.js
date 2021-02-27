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
  searchCharities: function(query) {
    return axios.get("/api/athletes/add");
  }
};



