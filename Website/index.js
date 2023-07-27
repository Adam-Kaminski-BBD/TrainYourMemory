const express = require('express');
const fs = require('fs');
const path = require('path');
const { log } = require('./Tools/Logger');
const proxy = require('./proxy');
const cors = require('cors');
require('dotenv').config();

const app = express();
// Basic website server setup

// Enable CORS for all routes
app.use(cors());

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

app.listen(process.env.PORT, ()=>{
  const serverUrl = `http://localhost:${process.env.PORT}`;
  log(`Server running at ${serverUrl}`, 'INFO');
});
