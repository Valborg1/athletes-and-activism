const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const athleteSchema = new Schema({
  playerid: { type: String},
  fullName: { type: String, required: true },
  image: { type: String },
  sport: { type: String },
  team: { type: String },
  dob: { type: String },
  bio: { type: String },
  charities: [
    {
      type: Schema.Types.ObjectId,
      ref: "Charity"
    }
  ],
});

const Athlete = mongoose.model("Athlete", athleteSchema);

module.exports = Athlete;