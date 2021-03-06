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
  searchCharities: function(query) {
    return axios.post(baseURL + "/api/add-athlete", {query});
  },
  
  // Gets all Single/ all Charities and causes
  getCharity: function(id) {
    return axios.post("api/charities/" + id);
  },
  
  getSingleAthletes: function() {
    return axios.get("/api/charities/single-athletes");
  },

  getSingleCause: function(id) {
    return axios.get(baseURL + "/api/causes/" + id);
  },

  getCauseAthletes: function(id) {
    return axios.get(baseURL + "/api/causes/athletes", {id});
  },
  getCauseCharities: function(id) {
    return axios.get(baseURL + "/api/causes/charities", {id});
  },

  getCharities: function() {
    return axios.get(baseURL + "/api/charities");
  },

 

 


  // deleteCharities: function(id) {
  //   return axios.post("api/charities/" + id);
  // },
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
 

searchAthletes: function(query) {
  console.log(query)
  return axios.get(`${ATHURL}${query.search}`, {
  headers: {
    'x-rapidapi-key': APIKEY,
    'x-rapidapi-host': 'thesportsdb.p.rapidapi.com',
    useQueryString: true
  }})
},
};




