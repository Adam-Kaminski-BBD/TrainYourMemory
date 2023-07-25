import * as Fn from './navbar.js';
document.addEventListener('DOMContentLoaded',()=>{
  isVerified();
  populateHistory();
  menuSetup();

});

function menuSetup(){
  const navbarElement = Fn.renderNavbar();
  const main = document.getElementsByTagName('main')[0];
  const body = document.getElementsByTagName('body')[0];
  body.insertBefore(navbarElement, main);
}

function isVerified(){
  console.log('You got tokens bro?');
}

function populateHistory(){
  const response = [
    {
      'Name': 'Johny Walker',
      'Location': 'The Venue',
      'Favourite Drink': 'Vodka Lime',
      'Favourite Bar': 'Shakers'
    },
    {
      'Name': 'Jack Sparrow',
      'Location': 'The Venue',
      'Favourite Drink': 'Vodka Lime',
      'Favourite Bar': 'Tigers Milk'
    },
    {
      'Name': 'Jamie Jameson',
      'Location': 'The Venue',
      'Favourite Drink': 'Vodka Lime',
      'Favourite Bar': 'The Rooftop'
    },
    {
      'Name': 'Paul Klipdrift',
      'Location': 'The Venue',
      'Favourite Drink': 'Vodka Lime',
      'Favourite Bar': 'Club Sheba'
    },
  ];

  const tbody = document.getElementsByTagName('tbody')[0];

  for(let i = 0; i < response.length; i++){
    const tr = document.createElement('tr');
    const keys = Object.keys(response[i]);
    keys.forEach(key=>{
      const td = document.createElement('td');
      td.innerText = response[i][key];
      tr.appendChild(td);
    });

    tbody.appendChild(tr);
  }

}