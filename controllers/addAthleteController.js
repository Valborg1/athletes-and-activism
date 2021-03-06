const db = require("../models");
const axios = require ("axios");


// Defining methods for the athletesController
module.exports = {
    searchCharities: async function(req, res) {
      try {

       const results = await axios.get(`https://api.data.charitynavigator.org/v2/Organizations?app_id=${process.env.CHARITY_APP_ID}&app_key=${process.env.CHARITY_APP_KEY}&pageSize=5&pageNum=1&search=${req.body.query}&searchType=NAME_ONLY&rated=true&sort=NAME%3AASC`);

       return res.json(results.data)
      }

      catch(err) {
        console.log("err", err)
        return res.json(err)
      }
    },
    charityAndCause: async function(req, res) { 
      try {
      const cause = await db.Cause.create(req.body.cause)
      const charity = await db.Charity.create({
        charityName: req.body.name,
        charityImage: req.body.image,
        charityBio: req.body.bio,
        charityURL: req.body.url,
      })
      
    await db.Charity.findOneAndUpdate({charity: charity._id}, { $push: { cause: cause._id } }, { new: true })
    await db.Athlete.findOneAndUpdate({athlete: body.athleteID}, { $push: { charity: charity._id } }, { new: true })
      return res.json({})
      }
      catch(err) {
      return res.json(err)
      }
    },
};


// The routes we built with mike and eric did nothing
// app.post("/submit", async ({ body }, res) => { 
//   try {
//   const cause = await db.Cause.create(body.cause)
//   const charity = await db.Charity.create({
//     charityName: body.name,
//     charityImage: body.image,
//     charityBio: body.bio,
//     charityURL: body.url,
//   })
  
//  await db.Charity.findOneAndUpdate({charity: charity._id}, { $push: { cause: cause._id } }, { new: true })
//  await db.Athlete.findOneAndUpdate({athlete: body.athleteID}, { $push: { charity: charity._id } }, { new: true })
//   return res.json({})
//   }
//   catch(err) {
//   return res.json(err)
//   }
// });
