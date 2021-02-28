const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const athleteSchema = new Schema({
  fullName: { type: String, required: true },
  image: { type: String },
  sport: { type: String },
  team: { type: String },
  dob: { type: String },
  bio: { type: String },
  charities: {
    charityName: { type: String },
    charityImage: { type: String },
    charityBio: { type: String },
    charityURL: { type: String }
  },
  causes: {
    causeType: { type: String },
    causeURL: { type: String }
  }
});

const Athlete = mongoose.model("Athlete", athleteSchema);


module.exports = Athlete;

