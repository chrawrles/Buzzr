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
    name: "Spoleto - My Italian Kitchen",


    zip: "92618",
    waittime: 0,
    img: "https://s3-media2.fl.yelpcdn.com/bphoto/jGPA86l4dXadcQSC7OXpPA/o.jpg"
  },
  {
    name: "SideDoor ",


    zip: "92618",
    waittime: 0,
    img: "https://s3-media4.fl.yelpcdn.com/bphoto/fJeaVLzTR9p-Xdk16mpWKA/o.jpg"
  },
  {
    name: "Urban Seoul",


    zip: "92612",
    waittime: 0,
    img: "https://s3-media1.fl.yelpcdn.com/bphoto/9J8QyCNLdLzUP5BNHcfLow/o.jpg"
  },
  {
    name: "EMC Seafood & Raw Bar",


    zip: "92604",
    waittime: 0,
    img: "https://s3-media2.fl.yelpcdn.com/bphoto/j7tHg3RbX77bO85Ytbf8mQ/o.jpg"
  },
  {
    name: "The Stand",


    zip: "92618",
    waittime: 0,
    img: "https://s3-media3.fl.yelpcdn.com/bphoto/SEqcOorgORBB4T0T9qnZFg/o.jpg"
  },
  {
    name: "The Cut",


    zip: "92606",
    waittime: 0,
    img: "https://s3-media1.fl.yelpcdn.com/bphoto/yNgml_VqyHNadYuBUu7bhA/o.jpg"
  },
  {
    name: "CAVA",


    zip: "92606",
    waittime: 0,
    img: "https://s3-media3.fl.yelpcdn.com/bphoto/V4ANxxCFV94x0Jyx8H-2eg/ls.jpg"
  },
  {
    name: "Puesto",


    zip: "92618",
    waittime: 0,
    img: "https://s3-media3.fl.yelpcdn.com/bphoto/EK9hda6PrKh0bG9DIaeioQ/o.jpg"
  },
  {
    name: "Blaze Fast-Fire’d Pizza",


    zip: "92618",
    waittime: 0,
    img: "https://s3-media3.fl.yelpcdn.com/bphoto/n18QxnT_nbysFcSkktjQfg/o.jpg"
  },
  {
    name: "Meizhou Dongpo",


    zip: "92604",
    waittime: 0,
    img: "https://s3-media2.fl.yelpcdn.com/bphoto/4mqls8Yp_V_CXOrwA0bV7Q/ls.jpg"
  },
  {
    name: "Twenty Eight",


    zip: "92604",
    waittime: 0,
    img: "https://s3-media4.fl.yelpcdn.com/bphoto/rUTZJ97H_UQYEk1SKezD2w/o.jpg"
  },
  {
    name: "Caspian Restaurant",


    zip: "92604",
    waittime: 0,
    img: "https://s3-media2.fl.yelpcdn.com/bphoto/XrGhXIjWY8kFiQnK-CMFTw/o.jpg"
  },
  {
    name: "Zov’s Irvine",


    zip: "92604",
    waittime: 0,
    img: "https://s3-media2.fl.yelpcdn.com/bphoto/4mqls8Yp_V_CXOrwA0bV7Q/ls.jpg"
  },
  {
    name: "Nick’s Laguna Beach",


    zip: "92604",
    waittime: 0,
    img: "https://s3-media1.fl.yelpcdn.com/bphoto/aC1d4ZNWAmG_pOJmWxs5GQ/o.jpg"
  },
  {
    name: "Daily Grill",


    zip: "92604",
    waittime: 0,
    img: "https://s3-media3.fl.yelpcdn.com/bphoto/SuNgo06OR42H4iLMdSMylg/o.jpg"
  },
  {
    name: "Driftwood Kitchen",


    zip: "92604",
    waittime: 0,
    img: "https://s3-media2.fl.yelpcdn.com/bphoto/gCZGy9GzZmKO8-bzti5v9Q/o.jpg"
  },
  {
    name: "Mix Mix Kitchen Bar",


    zip: "92604",
    waittime: 0,
    img: "https://s3-media2.fl.yelpcdn.com/bphoto/ng3w9o1zECFZxlVbYErdAg/o.jpg"
  },
  {
    name: "The Recess Room",


    zip: "92604",
    waittime: 0,
    img: "https://s3-media1.fl.yelpcdn.com/bphoto/I4OchMRcpfzkrbbk7WZ0Uw/o.jpg"
  },
  {
    name: "Ten Asian Bistro",


    zip: "92604",
    waittime: 0,
    img: "https://s3-media1.fl.yelpcdn.com/bphoto/VEtT-m-e0FuZBwPhoTND8g/o.jpg"
  },
  {
    name: "Kang Ho Dong Baekjeong",


    zip: "92604",
    waittime: 0,
    img: "https://s3-media4.fl.yelpcdn.com/bphoto/LFu7lLVaaEEO4sc6SnF34g/o.jpg"
  },
  {
    name: "Hen House Grill",


    zip: "92604",
    waittime: 0,
    img: "https://s3-media1.fl.yelpcdn.com/bphoto/cmNCpAic5dhnSDsXR_httA/o.jpg"
  },
  {
    name: "Asian Box",


    zip: "92604",
    waittime: 0,
    img: "https://s3-media2.fl.yelpcdn.com/bphoto/wI670E5RdUav3z1IUZK8iw/o.jpg"
  },
  {
    name: "Bosscat Kitchen and Libations",


    zip: "92604",
    waittime: 0,
    img: "https://s3-media4.fl.yelpcdn.com/bphoto/A0gMmzqDOyWtNLjA-F5ttg/o.jpg"
  },
  {
    name: "Habana",


    zip: "92604",
    waittime: 0,
    img: "https://s3-media2.fl.yelpcdn.com/bphoto/eOunbCV0f3hsmxc2Ufbmeg/o.jpg"
  },
  {
    name: "Kakurega",


    zip: "92604",
    waittime: 0,
    img: "https://s3-media4.fl.yelpcdn.com/bphoto/ot8YRhYICjJQcWfAjtxBVA/o.jpg"
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
