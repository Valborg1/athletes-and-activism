import axios from "axios";
const baseURL = process.env.REACT_APP_HOST || ''

const ATHURL = "https://thesportsdb.p.rapidapi.com/searchplayers.php?p="
const APIKEY = "6b24b1384fmshf59a581bd70a69ap1d4756jsn25a12c1f048e"


export default {
  // Gets all athletes
  getAthletes: function() {
    return axios.get(baseURL + "/api/athletes");
  },
  // Gets the athlete with the given id
  getAthlete: function(id) {
    return axios.get(baseURL + "/api/athletes/" + id);
  },
  // Deletes the athlete with the given id
  deleteathlete: function(id) {
    return axios.delete(baseURL + "/api/athletes/" + id);
  },
  // Saves a athlete to the database
  createAthlete: function(athleteData) {
    return axios.post(baseURL + "/api/athletes", {athleteData});
  },
  // Saves a athlete to the database
  saveathlete: function(athleteData) {
    return axios.post(baseURL + "/api/athletes", athleteData);
  },
  searchAthletes: function(query) {
    console.log(query)
    return axios.get(`${ATHURL}${query.search}`, {
    headers: {
      'x-rapidapi-key': APIKEY,
      'x-rapidapi-host': 'thesportsdb.p.rapidapi.com',
      useQueryString: true
    }})
  },
  searchCharities: function(query) {
    return axios.post(baseURL + "/api/add-athlete", {query});
  },
  
  // Gets all Single/ all Charities and causes

  getSingleCause: function(id) {
    return axios.get(baseURL + "/api/causes/" + id);
  },

  getSingleCharity: function(id) {
    return axios.get(baseURL + "/api/charities/" + id);
  },

  getCauseAthletes: function(id) {
    return axios.post(baseURL + "/api/causes/athletes", {id});
  },

  getCharityAthletes: function(id) {
    return axios.post(baseURL + "/api/charities/athletes", {id});
  },

  getCauseCharities: function(id) {
    return axios.post(baseURL + "/api/causes/charities", {id});
  },
  
  // getCharityAthletes: function(id) {
  //   return axios.post(baseURL + "/api/causes/athletes", {id});
  // },
  getCharityCause: function(causeId) {
    console.log("APIcheck", causeId)
    return axios.post(baseURL + "/api/charities/cause", {causeId});
  },


  // getCharities: function() {
  //   return axios.get(baseURL + "/api/charities");
  // },

  addCharityAndCauseData: function(data) {
    return axios.post(baseURL + "/api/add-athlete/charity-and-cause", {data})
  },
  searchAthletes: function(query) {
    console.log(query)
    return axios.get(`${ATHURL}${query.search}`, {
    headers: {
      'x-rapidapi-key': APIKEY,
      'x-rapidapi-host': 'thesportsdb.p.rapidapi.com',
      useQueryString: true
    }})
  },
  
  getCauses: function() {
    return axios.get("api/causes");
  },

  addFavAthlete: function(id){
     return axios.post("/api/users/favorites/" + id) 
  },
  getCharities: function() {
    return axios.get("api/charities");
  },

};




