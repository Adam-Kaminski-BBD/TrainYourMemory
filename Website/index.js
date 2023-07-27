const express = require('express');
const fs = require('fs');
const path = require('path');
const { log } = require('./Tools/Logger');
const proxy = require('./proxy');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const cookieSession = require('cookie-session');
const cors = require('cors');

require('dotenv').config();

const app = express();
// Basic website server setup

// Enable CORS for all routes
app.use(cors());

app.use(cookieSession({
  maxAge: 60 * 60 * 1000,
  keys: ['randomstringhere']
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
  clientID: process.env.CLIENTID,
  clientSecret: process.env.CLIENTSECRET,
  callbackURL: '/dashboard'
},
(accessToken, refreshToken, profile, done) => {
  done(null, profile);
}
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

function isUserAuthenticated(req, res, next) {
  if (req.user) {
    next();
  } else {
    res.send('You must login!');
  }
}

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
app.get('/dashboard', (req, res)=>{
  // home page
  res.sendFile(path.join(dir, './dashboard.html'));
});

app.get('/friends', (req, res)=>{
  // list of the homies
  res.sendFile(path.join(dir, './friends.html'));
});

app.get('/locations', (req, res)=>{
  // list of the homies
  res.sendFile(path.join(dir, './locations.html'));
});

app.get('/drinks', (req, res)=>{
  // list of the homies
  res.sendFile(path.join(dir, './drinks.html'));
});

app.get('/history', (req, res)=>{
  // list of the homies
  res.sendFile(path.join(dir, './history.html'));
});

app.get('/entry', (req, res)=>{
  // Enter drink etc.
  res.sendFile(path.join(dir, './entry.html'));
});

app.get('/FAQ', (req, res)=>{
  // list of the homies
  res.sendFile(path.join(dir, './FAQ.html'));
});

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile']
}));

app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect('/secret');
});

app.get('/secret', isUserAuthenticated, (req, res) => {
  res.send('You have reached the secret route');
});

app.get('/logout', (req, res) => {
  req.logOut();
  res.redirect('/');
});

app.listen(process.env.PORT, ()=>{
  const serverUrl = `http://localhost:${process.env.PORT}`;
  log(`Server running at ${serverUrl}`, 'INFO');
});
