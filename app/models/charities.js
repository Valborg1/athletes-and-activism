const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharitiesSchema = new Schema({
    charity: {
        charityName: { type: String },
        charityImage: { type: String },
        charityBio: { type: String },
        charityURL: { type: String },
    },
    cause: [
      {
        type: Schema.Types.ObjectId,
        ref: "Cause"
      }
    ]
  });

const Charity = mongoose.model("Charity", CharitiesSchema);

module.exports = Charity;