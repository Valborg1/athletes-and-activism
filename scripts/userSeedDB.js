const mongoose = require("mongoose");
const db = require("../app/models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/athletes-and-activism"
);

const userSeed = [
    {
        username: "Josh",
        email: "jduncan@gmail.com",
        password: "test",
        favorites: []
    },
    {
        username: "Tiffany",
        email: "tduncan@gmail.com",
        password: "test",
        favorites: []
    }
];

db.User
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
