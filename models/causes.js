const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const causeSchema = new mongoose.SchemaType({
    causeName: { type: String, required: true },
    
})

const Cause = mongoose.model("Cause", causeSchema);

module.exports = Cause;