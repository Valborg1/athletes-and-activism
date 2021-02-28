const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/athletes-and-activism"
);

const causesSeed = [
  {
    category: "Healthcare"
  },
  causes: {
    causeType: "Children",
    // causeURL: "http://google.com"
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
    // causeURL: "http://google.com"
  },
]

const athleteSeed = [
  {
  fullName: "John Johnson",
  image: "john image",
  sport: "Basketball",
  team: "The ball shooters",
  dob: "1/1/1990",
  bio: "He do all the fings",
  charities: [
    {
      type: "603aa20d015620045436c9fd",
      ref: "Charity"
    },
    {
      type: "603aa20d015620045436c9fe",
      ref: "Charity"
    }
  ],
  },
  {
    fullName: "Bill Billerson",
    image: "bill image",
    sport: "Sky Diving",
    team: "The Splats",
    dob: "1/1/1993",
    bio: "Hope my chute opens!",
    charities: [
      {
        type: "603aa39831afa2083cc5045f",
        ref: "Charity"
      }
    ],
    }
];


db.Athlete
  .remove({})
  .then(() => db.Athlete.collection.insertMany(causesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Athlete
  .remove({})
  .then(() => db.Athlete.collection.insertMany(charitySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

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
