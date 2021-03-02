const db = require("../models");

// Defining methods for the athletesController
module.exports = {
  findAll: function(req, res) {
    db.Athlete
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
   findCharity: function(req, res) {
     db.Athlete
      .find()
      .where("charities.charityName").equals(req.body.charity) //req.body.charity
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Athlete
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Athlete
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Athlete
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Athlete
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  searchAthletes: function(req, res) {
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


