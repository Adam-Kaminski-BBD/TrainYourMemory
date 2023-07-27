const express = require('express');
const bodyParser = require('body-parser');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const route = express.Router();

// Parse JSON data
route.use(bodyParser.json());

// Parse URL-encoded data
route.use(bodyParser.urlencoded({ extended: true }));

// C# API server
const url = 'http://localhost:8080';
let data = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};

let urlencodedParser = bodyParser.urlencoded({ extended: false });

route.post('/entry', urlencodedParser, async (req, res)=>{
  try {
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
  const dummy = [
    'Vodka Lime',
    'Redbull Vodka',
    'Water',
    'Orange Juice',
    'Champagne'
  ];
  try {
    const outcome = await fetch(`${url}/drinks`);
    if(outcome.ok){
      const drinks = await outcome.json();
      res.status(200).json(drinks);
    }else{
      throw outcome;
    }

  } catch (error) {
    res.status(200).json(dummy);
    // res.status(400).send('Invalid request');
  }
});

route.get('/drink/top/:user', urlencodedParser, async (req, res)=>{
  try {
    const user = req.params.user;
    // C# API
    const outcome = await fetch(`${url}/entry/${user}`);
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
  const dummy = [
    '1 Discovery Place',
    'The Yellowbrick road',
    'Mom house',
    'Bro house',
    'Her house'
  ];
  try {
    // C# API
    const outcome = await fetch(`${url}/locations`);
    if(outcome.ok){
      const locations = await outcome.json();
      res.status(200).json(locations);
    }else{
      throw outcome;
    }

  } catch (error) {
    res.send(dummy);
    // res.status(400).send('Invalid request');
  }
});

route.get('/location/top/:user', urlencodedParser, async (req, res)=>{
  try {
    const user = req.params.user;
    // C# API
    const outcome = await fetch(`${url}/location/${user}`);
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
    // C# API
    const outcome = await fetch(`${url}/spend/${user}`);
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
  
  const dummy = [
    {
      'Date': '14 July 2023',
      'Location': 'The Venue',
      'Drink': 'Vodka Lime',
      'Cost': 'R45'
    },
    {
      'Date': '14 July 2023',
      'Location': 'The Venue',
      'Drink': 'Vodka Lime',
      'Cost': 'R45'
    },
    {
      'Date': '14 July 2023',
      'Location': 'The Venue',
      'Drink': 'Vodka Lime',
      'Cost': 'R45'
    },
    {
      'Date': '14 July 2023',
      'Location': 'The Venue',
      'Drink': 'Vodka Lime',
      'Cost': 'R45'
    },
  ];
  
  try {
    const user = req.params.user;
    // C# API
    const outcome = await fetch(`${url}/location/${user}`);
    
    if(outcome.ok){
      const history = await outcome.json();
      res.status(200).json(history);
    }else{
      res.status(200).send(dummy);
      // Doing because it will be invalid until actual call
      // throw outcome;
    }

  } catch (error) {
    res.status(400).send('Invalid request');
  }
});

module.exports = route;