import * as Fn from './navbar.js';

const name = "Thabang"; 
const topDrink = 'SkullCrusher';
const topBAr = 'The Midnight';
const spending =900;



const navbarElement = Fn.renderNavbar(
  `${name}'s Training`);

const navbarContainer = document.getElementById('navbarContainer');
navbarContainer.appendChild(navbarElement);

const greeting = document.getElementById('h1');
greeting.textContent = `Hey ${name}, what did you have this time?`;

const drink = document.getElementById('drink');
drink.textContent = topDrink;

const bar = document.getElementById('bar');
bar.textContent = topBAr;

const spend = document.getElementById('spend');
spend.textContent =  `R${spending}`;

const locations = ["The Gabe", "Tiger's", "Emerald", "CheekyT"];
locations.map((location, index) => {
  const element = document.getElementById(`location${index + 1}`);
  if (element) {
    element.textContent = location;
  }
});