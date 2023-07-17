const express = require('express');
const fs = require('fs');
const path = require('path');
const { log } = require('./Tools/Logger');
require('dotenv').config();

const app = express();
// Basic website server setup
const dir = path.join(__dirname, './public/views');
// Static files
fs.readdirSync('./public', {
  withFileTypes: true,
})
  .filter((item) => item.isDirectory())
  .forEach((folder) => {
    app.use(express.static( path.join(__dirname, 'public', folder.name)));
  });

app.get('/', (req, res)=>{
  // Possible check for existing token? Then redirect to dashboard if expired
  res.sendFile(path.join(dir, './login.html'));
});

app.get('/dashboard', (req, res)=>{
  // if(validated)
  res.sendFile(path.join(dir, './dashboard.html'));
});

app.get('/entry', (req, res)=>{
  // Enter drink etc.
  res.sendFile(path.join(dir, './entry.html'));
});

app.get('/friends', (req, res)=>{
  // list of the homies
  res.sendFile(path.join(dir, './friends.html'));
});

app.listen(process.env.PORT, ()=>{
  const serverUrl = `http://localhost:${process.env.PORT}`;
  log(`Server running at ${serverUrl}`, 'INFO');
});
