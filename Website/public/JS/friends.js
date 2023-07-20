import * as Fn from './navbar.js';

const navbarElement = Fn.renderNavbar(
  '../Images/image1.png',
  "John's Training",
  [{ label: 'Home', onclick: Fn.showHome },
    { label: 'Friends', onclick: Fn.showFriends, active: true },
    { label: 'Locations', onclick: Fn.showLocations },
    { label: 'Drinks', onclick: Fn.showDrinks },
    { label: 'History', onclick: Fn.showHistory },
    { label: 'New Entry', onclick: Fn.showEntry },
    { label: 'FaQ', onclick: Fn.showFaQ }
  ]
);

const navbarContainer = document.getElementById('navbarContainer');
navbarContainer.appendChild(navbarElement);


document.addEventListener('DOMContentLoaded',()=>{
  isVerified();
  populateHistory();
});

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