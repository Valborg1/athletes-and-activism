const db = require("../models");
// import mongoose from ('mongoose')
const mongoose = require ('mongoose')

// Defining methods for the CharitysController
module.exports = {
    findAll: function (req, res) {
      db.Charity.find(req.query)
        .sort({ charity: -1 })
        .then((dbModel) => {
          console.log("FINDALL:", dbModel);
          res.json(dbModel);
        })
        .catch((err) => res.status(422).json(err));
    },
  
    // findCauses: function (req, res) {
    //   db.Charity.find(req.query)
    //     .sort({ charity: -1 })
    //     .then((dbModel) => {
    //       console.log("FINCHARITY:", dbModel);
    //       res.json(dbModel);
    //     })
    //     .catch((err) => res.status(422).json(err));
    // },

    findAthletes: function(req, res) {
      db.Athlete
       .find({charities: mongoose.Types.ObjectId(req.body.id)})
       .then(dbModel => res.json(dbModel))
       .catch(err => res.status(422).json(err));
    },

    findCause: function(req, res) {
      db.Cause
       .findById(req.body.causeId)
       .then(dbModel => res.json(dbModel))
       .catch(err => res.status(422).json(err));
    },
  
    findCharity: function (req, res) {
      db.Charity.find()
        // .where("charities.charityName").equals(req.body.charity) //req.body.charity
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    },
  
    findById: function (req, res) {
      // console.log ("req", req)
      db.Charity
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
    },
  
  
    create: function (req, res) {
      db.Charity.create(req.body)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    },
    update: function (req, res) {
      db.Charity.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    },
    remove: function (req, res) {
      db.Charity.findById({ _id: req.params.id })
        .then((dbModel) => dbModel.remove())
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    },
  };
  