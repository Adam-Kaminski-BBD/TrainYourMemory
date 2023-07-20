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
  // request to api
  //Test data
  const response = [
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

  const tbody = document.getElementsByTagName('tbody')[0];

  for(let i = 0; i < response.length; i++){
    // create tr and td for each key in the object
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