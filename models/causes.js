const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CausesSchema = new Schema({
  category: String,
});
const Cause = mongoose.model("Cause", CausesSchema);
module.exports = Cause;