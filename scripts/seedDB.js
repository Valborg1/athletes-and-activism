const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/athletes-and-activism"
);

const athleteSeed = [
{
  fullName: "Jack Jackerson",
  image: "image-jack",
  sport: "Basketball",
  team: "Raptors",
  dob: "1-1-1990",
  bio: "Jack throws balls in hoops.",
  charities: {
    charityName: "Basketballs for Babies",
    charityImage: "image-charity",
    charityBio: "We give basketballs to babies, why? i have no idea.",
    charityURL: "charity url"
  },
  causes: {
    causeType: "Children",
    causeURL: "http://google.com"
  }
},
{
  fullName: "John Johnerson",
  image: "image-john",
  sport: "Curling",
  team: "Icemen",
  dob: "1-1-1995",
  bio: "You know.",
  charities: {
    charityName: "Curls for Gurls",
    charityImage: "image-charity2",
    charityBio: "We teach girls how to curl.",
    charityURL: "charity url2"
  },
  causes: {
    causeType: "Women",
    causeURL: "http://google.com"
  }
}
];

db.Athlete
  .remove({})
  .then(() => db.Athlete.collection.insertMany(athleteSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
