import * as Fn from './navbar.js';

document.addEventListener('DOMContentLoaded',()=>{
  menuSetup();
  populateHistory();
  populateSpending();
  populateTopDrink();
  populateTopLocation();
  populateUser();
});

async function menuSetup(){
  const userCheck = await fetch('/api/user');
  const userInfo = await userCheck.json();

  const user = userInfo.name;
  const navbarElement = Fn.renderNavbar(user);
  const main = document.getElementsByTagName('main')[0];
  const body = document.getElementsByTagName('body')[0];
  body.insertBefore(navbarElement, main);
}

//Use the above document.addEventListener to call functions like the menuSetup to populate the screen, cleans things up

//I'll get the ude from local/sessional storage or wherever else they store it
async function populateUser(){
  const userCheck = await fetch('/api/user');
  const userInfo = await userCheck.json();

  const user = userInfo.name;

  const name = user;
  const greeting = document.getElementById('h1');
  greeting.textContent = `Hey ${name}, what did you have this time?`;
}

async function populateHistory(){
  try {
    const userCheck = await fetch('/api/user');
    const userInfo = await userCheck.json();

    const user = userInfo.id;
    const token = userInfo.token;
    const data = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
    };
    const response = await fetch(`/api/history/${user}`, data);
    let locations = [];
    if(response.ok){
      locations = await response.json();
    }
    locations.map((location, index) => {
      const element = document.getElementById(`location${index + 1}`);
      if (element) {
        element.textContent = location;
      }
    });

  } catch (error) {
    alert(error);
  }
 
}

async function populateTopDrink(){
  try {

    const userCheck = await fetch('/api/user');
    const userInfo = await userCheck.json();

    const user = userInfo.id;
    const token = userInfo.token;
    const data = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
    };
    const response = await fetch(`/api/drink/top/${user}`, data);
    if(response.ok){
      const drink = document.getElementById('drink');
      drink.textContent = response.drink;    }
  } catch (error) {
    alert(error);
  }
}

async function populateTopLocation(){
  try {
    const userCheck = await fetch('/api/user');
    const userInfo = await userCheck.json();

    const user = userInfo.id;
    const token = userInfo.token;
    const data = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
    };
    const response = await fetch(`/api/location/top/${user}`, data);
    if(response.ok){
      const bar = document.getElementById('bar');
      bar.textContent = response.location;
    }
  } catch (error) {
    alert(error);
  }
}

async function populateSpending(){
  try {
    const userCheck = await fetch('/api/user');
    const userInfo = await userCheck.json();

    const user = userInfo.id;
    const token = userInfo.token;
    const data = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
      },
    };
    const response = await fetch(`/api/spend/${user}`, data);
    if(response.ok){
      const spend = document.getElementById('spend');
      spend.textContent =  `R${response.amount}`;
    }
  } catch (error) {
    alert(error);
  }
}