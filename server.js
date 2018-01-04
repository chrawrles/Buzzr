// Loading evnironmental variables here
if (process.env.NODE_ENV !== 'production') {
  console.log('loading dev environments')
  require('dotenv').config()
}
require('dotenv').config()

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const dbConnection = require('./db') // loads our connection to the mongo database
const passport = require('./passport')
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// ===== Middleware ====
app.use(morgan('dev'))

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve up static assets
if (process.env.NODE_ENV === 'production') {
  const path = require('path')
  console.log('YOU ARE IN THE PRODUCTION ENV')
app.use(express.static("client/build"));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/'))
  })
}

/* Express app ROUTING */
app.use('/auth', require('./auth'))

// Add routes, both API and view
app.use(routes);

app.use(
  session({
    secret: process.env.APP_SECRET || 'this is the default passphrase',
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false,
    saveUninitialized: false
  })
)

// ===== Passport ====
app.use(passport.initialize())
app.use(passport.session()) // will call the deserializeUser

// Set up promises with mongoose
// mongoose.Promise = global.Promise;
// // Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
//   {
//     useMongoClient: true
//   }
// );

// ====== Error handler ====
app.use(function(err, req, res, next) {
  console.log('====== ERROR =======')
  console.error(err.stack)
  res.status(500)
})

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
