const express = require('express');
const bodyParser = require('body-parser');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const route = express.Router();

// Parse JSON data
route.use(bodyParser.json());

// Parse URL-encoded data
route.use(bodyParser.urlencoded({
  extended: true 
}));

// C# API server
const url = 'http://localhost:7166';
const data = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

const urlencodedParser = bodyParser.urlencoded({
  extended: false 
});

route.post('/entry', urlencodedParser, async (req, res)=>{
  try {
    const token = req.headers['authorization'].split(' ')[1];

    data['method'] = 'POST';
    data['headers']['authorization'] = token;
    const entry = req.body;
    data['body'] = entry;

    // C# API
    const outcome = await fetch(`${url}/entry`, data);
    if(outcome.ok){
      res.status(200).send('All good!');
    }else{
      throw outcome;
    }

  } catch (error) {
    res.status(400).send('Invalid request');
  }

});

route.post('/user', urlencodedParser, async (req, res)=>{
  try {
    const token = req.headers['authorization'].split(' ')[1];

    data['method'] = 'POST';
    data['headers']['authorization'] = token;
    const entry = req.body;
    data['body'] = entry;

    // C# API
    const outcome = await fetch(`${url}/user`, data);
    if(outcome.ok){
      res.status(200).send('All good!');
    }else{
      throw outcome;
    }

  } catch (error) {
    res.status(400).send('Invalid request');
  }
});

route.get('/drinks', urlencodedParser, async (req, res)=>{
  const token = req.headers['authorization'].split(' ')[1];

  data['method'] = 'GET';
  data['headers']['authorization'] = token;
  try {
    const outcome = await fetch(`${url}/drinks`);
    if(outcome.ok){
      const drinks = await outcome.json();
      res.status(200).json(drinks);
    }else{
      throw outcome;
    }

  } catch (error) {
    res.status(400).send('Invalid request');
  }
});

//just in case we need it somewhere
route.get('/friends', urlencodedParser, async (req, res)=>{
  try {
    const token = req.headers['authorization'].split(' ')[1];

    data['method'] = 'GET';
    data['headers']['authorization'] = token;
    const outcome = await fetch(`${url}/friends`);
    if(outcome.ok){
      const friends = await outcome.json();
      res.status(200).json(friends);
    }else{
      throw outcome;
    }

  } catch (error) {
    res.status(200).send('Invalid request');
  }
});

route.get('/drink/top/:user', urlencodedParser, async (req, res)=>{
  try {
    const user = req.params.user;
    const token = req.headers['authorization'].split(' ')[1];

    data['method'] = 'GET';
    data['headers']['authorization'] = token;
    // C# API
    const outcome = await fetch(`${url}/entry/${user}`, data);
    if(outcome.ok){
      res.status(200).send('All good!');
    }else{
      throw outcome;
    }

  } catch (error) {
    res.status(400).send('Invalid request');
  }
});

//Get drinks related to that user
route.get('/drinks/:user', urlencodedParser, async (req, res)=>{
  try {

    const user = req.params.user;
    const token = req.headers['authorization'].split(' ')[1];

    data['method'] = 'GET';
    data['headers']['authorization'] = token;
    // C# API
    const outcome = await fetch(`${url}/drinks/${user}`);
    if(outcome.ok){
      res.status(200).send('All good!');
    }else{
      throw outcome;
    }

  } catch (error) {
    res.status(400).send('Invalid request');
  }
});

//Get friends of that user
route.get('/friends/:user', urlencodedParser, async (req, res)=>{
  try {
    const user = req.params.user;
    const token = req.headers['authorization'].split(' ')[1];

    data['method'] = 'GET';
    data['headers']['authorization'] = token;
    // C# API
    const outcome = await fetch(`${url}/friends/${user}`);
    if(outcome.ok){
      res.status(200).send('All good!');
    }else{
      throw outcome;
    }

  } catch (error) {
    res.status(400).send('Invalid request');
  }
});

//Get locations that the user has been to
route.get('/locations/:user', urlencodedParser, async (req, res)=>{
  try {
    const user = req.params.user;
    const token = req.headers['authorization'].split(' ')[1];

    data['method'] = 'GET';
    data['headers']['authorization'] = token;
    // C# API
    const outcome = await fetch(`${url}/locations/${user}`);
    if(outcome.ok){
      res.status(200).send('All good!');
    }else{
      throw outcome;
    }

  } catch (error) {
    res.status(400).send('Invalid request');
  }
});

route.get('/locations', urlencodedParser, async (req, res)=>{
  try {
    const token = req.headers['authorization'].split(' ')[1];

    data['method'] = 'GET';
    data['headers']['authorization'] = token;
    // C# API
    const outcome = await fetch(`${url}/locations`);
    if(outcome.ok){
      const locations = await outcome.json();
      res.status(200).json(locations);
    }else{
      throw outcome;
    }

  } catch (error) {
    res.status(400).send('Invalid request');
  }
});

route.get('/location/top/:user', urlencodedParser, async (req, res)=>{
  try {
    const user = req.params.user;
    const token = req.headers['authorization'].split(' ')[1];

    data['method'] = 'GET';
    data['headers']['authorization'] = token;
    // C# API
    const outcome = await fetch(`${url}/entry/${user}`, data);
    if(outcome.ok){
      const location = await outcome.json();
      res.status(200).json(location);
    }else{
      throw outcome;
    }

  } catch (error) {
    res.status(400).send('Invalid request');
  }
});

route.get('/spend/:user', urlencodedParser, async (req, res)=>{
  try {
    const user = req.params.user;
    const token = req.headers['authorization'].split(' ')[1];

    data['method'] = 'GET';
    data['headers']['authorization'] = token;
    // C# API
    const outcome = await fetch(`${url}/entry/${user}`, data);
    if(outcome.ok){
      const spend = await outcome.json();
      res.status(200).json(spend);
    }else{
      throw outcome;
    }

  } catch (error) {
    res.status(400).send('Invalid request');
  }
});

route.get('/history/:user', urlencodedParser, async (req, res)=>{
  try {
    const user = req.params.user;
    const token = req.headers['authorization'].split(' ')[1];

    data['method'] = 'GET';
    data['headers']['authorization'] = token;
    // C# API
    const outcome = await fetch(`${url}/location/${user}`);
    
    if(outcome.ok){
      const history = await outcome.json();
      res.status(200).json(history);
    }else{
      throw outcome;
    }

  } catch (error) {
    res.status(400).send('Invalid request');
  }
});

route.get('/user', (req, res)=>{
  if(req.isAuthenticated()){
    res.status(200).send({
      id: req.user.id,
      name: req.user.displayName,
      token: req.user.token
    });
  }else{
    res.status(400).send('Invalid Request');
  }
});

module.exports = route;