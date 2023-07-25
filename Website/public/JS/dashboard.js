import * as Fn from './navbar.js';

document.addEventListener('DOMContentLoaded',()=>{
  menuSetup();
  populate();
});

function menuSetup(){
  const navbarElement = Fn.renderNavbar();
  const main = document.getElementsByTagName('main')[0];
  const body = document.getElementsByTagName('body')[0];
  body.insertBefore(navbarElement, main);
}

//Use the above document.addEventListener to call functions like the menuSetup to populate the screen, cleans things up

function populate(){
  const topDrink = 'SkullCrusher';
  const topBAr = 'The Midnight';
  const spending = 900;
  const name = 'Thabang';
  
  const greeting = document.getElementById('h1');
  greeting.textContent = `Hey ${name}, what did you have this time?`;

  const drink = document.getElementById('drink');
  drink.textContent = topDrink;

  const bar = document.getElementById('bar');
  bar.textContent = topBAr;

  const spend = document.getElementById('spend');
  spend.textContent =  `R${spending}`;

  const locations = ['The Gabe', 'Tiger\'s', 'Emerald', 'CheekyT'];
  locations.map((location, index) => {
    const element = document.getElementById(`location${index + 1}`);
    if (element) {
      element.textContent = location;
    }
  });
}