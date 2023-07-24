import * as Fn from './navbar.js';

const name = "Thabang"; 

const navbarElement = Fn.renderNavbar(
  `${name}'s Training`);

const navbarContainer = document.getElementById('navbarContainer');
navbarContainer.appendChild(navbarElement);

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