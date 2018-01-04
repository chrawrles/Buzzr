const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Restaurants collection and inserts the restaurants below

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://heroku_8k5t19nh:6fp3qhr6hfbbsl30mbpbffna27@ds113668.mlab.com:13668/heroku_8k5t19nh'
,
  {
    useMongoClient: true
  }
);

const restaurantSeed = [
  {
    name: "Club 33",
    zip: "Anaheim, CA 92802",
    waittime: 0,
    img: "https://s3-media3.fl.yelpcdn.com/bphoto/B5U0vD-Ak08DZl_Mhwed1Q/348s.jpg"
  },
  {
    name: "The Ranch Restaurant",
    zip: "Anaheim, CA 92805",
    waittime: 0,
    img: "https://s3-media1.fl.yelpcdn.com/bphoto/sQC7k4Nk7C6R11j3-u_xvw/348s.jpg"
  },
  {
    name: "Karl Strauss Brewing Company",
    zip: "Anaheim, CA 92806",
    waittime: 0,
    img: "https://s3-media2.fl.yelpcdn.com/bphoto/d1RyaJqXeoGVZ1Ga3RUPqw/348s.jpg"
  },
  {
    name: "Calivino Wine Pub",
    zip: "Anaheim, CA 92806",
    waittime: 0,
    img: "https://s3-media2.fl.yelpcdn.com/bphoto/2eUH_mkrGxNGjF-zhZTXoA/348s.jpg"
  },
  {
    name: "Zov’s Anaheim",
    zip: "Anaheim, CA 92805",
    waittime: 0,
    img: "https://s3-media1.fl.yelpcdn.com/bphoto/1euaIf9LJJaR81WqDrUSNQ/348s.jpg"
  },
  {
    name: "Ruth’s Chris Steak House ",
    zip: "Anaheim, CA 92802",
    waittime: 0,
    img: "https://s3-media2.fl.yelpcdn.com/bphoto/5uFji20XRmaFzthrr3BMLw/348s.jpg"
  },
  {
    name: "Club 33",
    zip: "Anaheim, CA 92802",
    waittime: 0,
    img: "https://s3-media3.fl.yelpcdn.com/bphoto/B5U0vD-Ak08DZl_Mhwed1Q/348s.jpg"
  },
  {
    name: "The Ranch Restaurant",
    zip: "Anaheim, CA 92805",
    waittime: 0,
    img: "https://s3-media1.fl.yelpcdn.com/bphoto/sQC7k4Nk7C6R11j3-u_xvw/348s.jpg"
  },
  {
    name: "Karl Strauss Brewing Company",
    zip: "Anaheim, CA 92806",
    waittime: 0,
    img: "https://s3-media2.fl.yelpcdn.com/bphoto/d1RyaJqXeoGVZ1Ga3RUPqw/348s.jpg"
  },
  {
    name: "Calivino Wine Pub",
    zip: "Anaheim, CA 92806",
    waittime: 0,
    img: "https://s3-media2.fl.yelpcdn.com/bphoto/2eUH_mkrGxNGjF-zhZTXoA/348s.jpg"
  },
  {
    name: "Zov’s Anaheim",
    zip: "Anaheim, CA 92805",
    waittime: 0,
    img: "https://s3-media1.fl.yelpcdn.com/bphoto/1euaIf9LJJaR81WqDrUSNQ/348s.jpg"
  },
  {
    name: "Ruth’s Chris Steak House ",
    zip: "Anaheim, CA 92802",
    waittime: 0,
    img: "https://s3-media2.fl.yelpcdn.com/bphoto/5uFji20XRmaFzthrr3BMLw/348s.jpg"
  }

];



const personSeed = [
    {
      name: "Jose Morales",
      phone: "123-123-1234",
      partysize: 4,
      checkinto: "Noodology",
      personrequest:"",
      personwait: 5,
      id: "5a24e89810c9675f8612fa94"
    },
    {
      name: "Charles Hu",
      phone: "123-123-1234",
      partysize: 8,
      checkinto: "Noodology",
      personrequest:"Anniversary",
      personwait: 5,
      id: "5a24e89810c9675f8612fa94"
    },
    {
      name: "Alex",
      phone: "123-123-1234",
      partysize: 5,
      checkinto: "Noodology",
      personrequest:"",
      personwait: 10,
      id: "5a24e89810c9675f8612fa94"
    },
    {
      name: "Micheal",
      phone: "123-123-1234",
      partysize: 2,
      checkinto: "Habana",
      personrequest:"Highchair",
      personwait: 5,
      id: "5a24e682534cc25f11989042"
    },
    {
      name: "Jon Grin",
      phone: "123-123-1234",
      partysize: 2,
      checkinto: "Habana",
      personrequest:"Birthday",
      personwait: 15,
      id: "5a24e682534cc25f11989042"
    }
  ];

db.Person
    .remove({})
    .then(() => db.Person.collection.insertMany(personSeed))
    .then(data => {
      console.log(data.insertedIds.length + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });


db.Restaurant
    .remove({})
    .then(() => db.Restaurant.collection.insertMany(restaurantSeed))
    .then(data => {
      console.log(data.insertedIds.length + " records inserted!");
      process.exit(0);
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
