const db = require("../models");
import axios from "axios";


// Defining methods for the athletesController
module.exports = {
    searchCharities: function(query) {
        return axios.get(`https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.CHARITY_APP_ID}&app_key=${process.env.CHARITY_APP_KEY}&pageSize=5&pageNum=1&search=${query}&searchType=NAME_ONLY`);
      }
};



