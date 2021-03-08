const { User } = require("../models");
const { getToken, decode } = require("../../app/services/token");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateFav: function (req, res) {
    console.log("here")
    try {
      var token = decode(getToken(req.headers));
      if (token) {
        console.log("token", token)
        console.log("req.favorites", req.params.id)
        User.findByIdAndUpdate(token.id, { $push: { favorites: req.params.id } }, (err, user) => {
          return res.json(user);
        });
      } else {
        return res.status(403).send({ success: false, msg: "Unauthorized." });
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  }
};
