import axios from "axios";
const baseURL = process.env.REACT_APP_HOST || ''

export default {
  // Gets all athletes
  getAthletes: function() {
    return axios.get(baseURL + "/api/athletes");
  },
  // Gets the athlete with the given id
  getathlete: function(id) {
    return axios.get(baseURL + "/api/athletes/" + id);
  },
  // Deletes the athlete with the given id
  deleteathlete: function(id) {
    return axios.delete(baseURL + "/api/athletes/" + id);
  },
  // Saves a athlete to the database
  saveathlete: function(athleteData) {
    return axios.post(baseURL + "/api/athletes", athleteData);
  },
  searchCharities: function(query) {
    return axios.post(baseURL + "/api/add-athlete", {query});
  },
  
  // Gets all Charities
  getCharities: function() {
    return axios.get("/api/charities");
  },

  getCharity: function(id) {
    return axios.post("api/charities/" + id);
  },

  // deleteCharities: function(id) {
  //   return axios.post("api/charities/" + id);
  // },

  getCauses: function() {
    return axios.get("api/causes");
    
  },
  getSingleCause: function(id) {
    return axios.post(baseURL + "api/causes/" + id);
  }
};



