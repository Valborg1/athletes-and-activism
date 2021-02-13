const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const athleteSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const athlete = mongoose.model("Athlete", athleteSchema);

module.exports = athlete;
