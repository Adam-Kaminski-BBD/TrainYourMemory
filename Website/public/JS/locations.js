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
      'Date': '21 July 2023',
      'Location': 'Venue A',
    },
    {
      'Date': '15 August 2023',
      'Location': 'Venue B',
    },
    {
      'Date': '2 September 2023',
      'Location': 'Venue C',
    },
    {
      'Date': '10 October 2023',
      'Location': 'Venue D',
    },
    {
      'Date': '5 November 2023',
      'Location': 'Venue E',
    },
    {
      'Date': '19 December 2023',
      'Location': 'Venue F',
    },
    {
      'Date': '8 January 2024',
      'Location': 'Venue G',
    },
    {
      'Date': '14 February 2024',
      'Location': 'Venue H',
    },
    {
      'Date': '22 March 2024',
      'Location': 'Venue I',
    },
    {
      'Date': '30 April 2024',
      'Location': 'Venue J',
    },
    {
      'Date': '17 May 2024',
      'Location': 'Venue K',
    },
    {
      'Date': '6 June 2024',
      'Location': 'Venue L',
    },
    {
      'Date': '25 July 2024',
      'Location': 'Venue M',
    },
    {
      'Date': '3 August 2024',
      'Location': 'Venue N',
    },
    {
      'Date': '12 September 2024',
      'Location': 'Venue O',
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