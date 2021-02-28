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
  {
    category: "Children"
  },
  {
    category: "World Hunger"
  },
  {
    category: "Clean Water"
  },
]

const charitySeed = [
  {
    charity: {
      charityName: "Toys for Tots",
      charityImage: "image",
      charityBio: "We take toys from poor kids and give them to rich kids!",
      charityURL: "www.toysfortots.com",
    },
    cause: [
      {
        type: "603aa0663f970b2e287bf315",
        ref: "Cause"
      }
    ]
  },
  {
    charity: {
      charityName: "Food for Yo Momma",
      charityImage: "image2",
      charityBio: "Feed hungry moms",
      charityURL: "www.yummyfood.com",
    },
    cause: [
      {
        type: "603aa0663f970b2e287bf316",
        ref: "Cause"
      }
    ]
  },
  {
    charity: {
      charityName: "Clean Water For U",
      charityImage: "image3",
      charityBio: "We water plants, not humans",
      charityURL: "www.water.com",
    },
    cause: [
      {
        type: "603aa20d015620045436c9fc",
        ref: "Cause"
      }
    ]
  }
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


db.Cause
  .remove({})
  .then(() => db.Cause.collection.insertMany(causesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Charity
  .remove({})
  .then(() => db.Charity.collection.insertMany(charitySeed))
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
