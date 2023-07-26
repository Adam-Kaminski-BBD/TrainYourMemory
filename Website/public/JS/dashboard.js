import * as Fn from './navbar.js';

document.addEventListener('DOMContentLoaded',()=>{
  menuSetup();
  populateHistory();
  populateSpending();
  populateTopDrink();
  populateTopLocation();
  populateUser();
});

function menuSetup(){
  const navbarElement = Fn.renderNavbar();
  const main = document.getElementsByTagName('main')[0];
  const body = document.getElementsByTagName('body')[0];
  body.insertBefore(navbarElement, main);
}

//Use the above document.addEventListener to call functions like the menuSetup to populate the screen, cleans things up

//I'll get the ude from local/sessional storage or wherever else they store it
function populateUser(){
  const name = 'Thabang';
  const greeting = document.getElementById('h1');
  greeting.textContent = `Hey ${name}, what did you have this time?`;
}

async function populateHistory(){
  try {
    const response = await fetch('/api/locations/');
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
    const user = 'john@doe.com';
    const response = await fetch(`/api/drink/top/${user}`);
    if(response.ok){
      const drink = document.getElementById('drink');
      drink.textContent = response.drink;    }
  } catch (error) {
    alert(error);
  }
}

async function populateTopLocation(){
  try {
    const user = 'john@doe.com';
    const response = await fetch(`/api/location/top/${user}`);
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
    const user = 'john@doe.com';
    const response = await fetch(`/api/spend/${user}`);
    if(response.ok){
      const spend = document.getElementById('spend');
      spend.textContent =  `R${response.amount}`;
    }
  } catch (error) {
    alert(error);
  }
}