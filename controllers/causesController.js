const db = require("../models");
// import mongoose from ('mongoose')
const mongoose = require ('mongoose')

// Defining methods for the.CausesController
module.exports = {
  findAll: function(req, res) {
    db.Cause
      .find(req.query)
      .sort({ category: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
   findCharity: function(req, res) {
     db.Cause
      .find()
      .where("charities.charityName").equals(req.body.charity) 
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAthletes: function(req, res) {
    db.Athlete
     .find()
    //  .where("causes._id").equals(req.body.id) 
     .populate({path: "charities", populate:{path: "cause"}})
     .then(dbModel => res.json(dbModel))
     .catch(err => res.status(422).json(err));
 },
 findCharities: function(req, res) {
  db.Charity
   .find({cause: mongoose.Types.ObjectId(req.body.id)})
   .then(dbModel => res.json(dbModel))
   .catch(err => res.status(422).json(err));
},
  findById: function(req, res) {
    db.Cause
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function(req, res) {
    db.Cause
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Cause
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Cause
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Cause
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};