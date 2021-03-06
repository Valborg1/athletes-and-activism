const mongoose = require("mongoose");
const db = require("../models");
const ObjectId = mongoose.Types.ObjectId;

    // ({ _id: ObjectId("603aa0663f970b2e287bf316")},{$push: {cause: ObjectId("603aa0663f970b2e287bf315")}},{new: true})

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/athletes-and-activism"
);

const causesSeed = [
  {
    _id: ObjectId("603aa0663f970b2e287bf315"),
    category: "Healthcare"
  }
]

const charitySeed = [
  {
    _id: ObjectId("603aa0663f970b2e287bf316"),
    charity: {
      charityName: "Health for Tots",
      charityImage: "image",
      charityBio: "We take toys from poor kids and give them to rich kids!",
      charityURL: "www.toysfortots.com",
    },
    cause: []
  },
]

const athleteSeed = [
  {
    _id: ObjectId("603aa39831afa2083cc5045f"),
    playerid: "1234567890",
  fullName: "John Johnson",
  image: "john image",
  sport: "Basketball",
  team: "The ball shooters",
  dob: "1/1/1990",
  bio: "He do all the fings",
  charities: [],
  },
];


db.Cause
  .remove({})
  .then(() => db.Cause.collection.insertMany(causesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
      seedCharity();
  })
  .catch(err => {
    console.error(err);
  });

  function seedCharity() {
  db.Charity
  .remove({})
  .then(() => db.Charity.collection.insertMany(charitySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");

    console.log("charityID", ObjectId("603aa0663f970b2e287bf316"))
    console.log("causeID", ObjectId("603aa0663f970b2e287bf315"))
    
      seedAthletes();
    db.Charity
    .findOne({ _id: ObjectId("603aa0663f970b2e287bf316")}).exec().then(charity => {
      charity.cause.push(ObjectId("603aa0663f970b2e287bf315"))
      charity.save()
    })
  })
  .catch(err => {
    console.error(err);
  });
}

  function seedAthletes() {
  db.Athlete
  .remove({})
  .then(() => db.Athlete.collection.insertMany(athleteSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");

    db.Athlete
    .findOne({ _id: ObjectId("603aa39831afa2083cc5045f")}).exec().then(athlete => {
      athlete.charities.push(ObjectId("603aa0663f970b2e287bf316"))
      athlete.save().then(() => {
        process.exit()
      })
      
    })
  })
  .catch(err => {
    console.error(err);
  });

}