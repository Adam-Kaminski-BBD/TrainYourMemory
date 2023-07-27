const express = require('express');
const fs = require('fs');
const path = require('path');
const { log } = require('./Tools/Logger');
const proxy = require('./proxy');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session'); // Added this line for session management
const cors = require('cors');

require('dotenv').config();

const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(session({
  secret: 'your-secret-key-here',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 60 * 1000, // Makes the cookie valid for an hour in milliseconds
  }
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
  clientID: process.env.CLIENTID,
  clientSecret: process.env.CLIENTSECRET,
  callbackURL: '/dashboard', 
},
(accessToken, refreshToken, profile, done) => {
  done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  // Replace this example logic with your actual user retrieval logic.
  // Example: User.findById(id, (err, user) => done(err, user));
  done(null, user);
});

// function isUserAuthenticated(req, res, next) {
//   if (req.user) {
//     next();
//   } else {
//     res.send('You must login!');
//   }
// }

const dir = path.join(__dirname, './public/Views');
// Static files
fs.readdirSync('./public', {
  withFileTypes: true,
})
  .filter((item) => item.isDirectory())
  .forEach((folder) => {
    app.use(express.static( path.join(__dirname, 'public', folder.name)));
  });

// proxy routing for api
app.use('/api', proxy);

// Basic web routing
app.get('/', (req, res)=>{
  res.sendFile(path.join(dir, './login.html'));
});

// All other screens require middleware validation, and this token can be used for validation on API

app.get('/dashboard', passport.authenticate('google', {
  failureRedirect: '/',
  scope: ['email', 'profile']
}), (req, res) => {
  res.redirect('/home');
});

app.get('/home', (req, res) => {
  if (req.isAuthenticated()) {
    res.sendFile(path.join(dir, './dashboard.html'));
  } else {
    res.redirect('/');
  }
});

app.get('/friends', (req, res)=>{
  // list of the homies
  if (req.isAuthenticated()) {
    res.sendFile(path.join(dir, './friends.html'));
  } else {
    res.redirect('/');
  }
});

app.get('/locations', (req, res)=>{
  if (req.isAuthenticated()) {
  // list of the homies
    res.sendFile(path.join(dir, './locations.html'));
  } else {
    res.redirect('/');
  }
});

app.get('/drinks', (req, res) => {
  if (req.isAuthenticated()){
    // list of the homies
    res.sendFile(path.join(dir, './drinks.html'));
  } else {
    res.redirect('/');
  }
});

app.get('/history', (req, res) => {
  if (req.isAuthenticated()) {
    // list of the homies
    res.sendFile(path.join(dir, './history.html'));
  } else {
    res.redirect('/');
  }
});

app.get('/entry', (req, res) => {
  if (req.isAuthenticated()) {
    // Enter drink etc.
    res.sendFile(path.join(dir, './entry.html'));
  } else {
    res.redirect('/');
  }
});

app.get('/FAQ', (req, res) => {
  if (req.isAuthenticated()) {
    // list of the homies
    res.sendFile(path.join(dir, './FAQ.html'));
  } else {
    res.redirect('/');
  }
});

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile']
}));

// app.get('/auth/google/callback', passport.authenticate('google', {
//   failureRedirect: '/'
// }), (req, res) => {
//   res.redirect('/dashboard');
// });

app.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

app.listen(process.env.PORT, ()=>{
  const serverUrl = `http://localhost:${process.env.PORT}`;
  log(`Server running at ${serverUrl}`, 'INFO');
});
