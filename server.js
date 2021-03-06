require('dotenv').config()

const express = require("express");
const config = require("./config/database");
const mongoose = require("mongoose");
const routes = require("./routes");
const { User } = require("./app/models");
const cors = require('cors')
const app = express();

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

require("./config/passport")(User);

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(config.database);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/athletes-and-activism",
{
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
