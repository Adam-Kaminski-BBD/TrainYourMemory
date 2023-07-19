import renderNavbar  from './navbar.js';

function showFriends() {
  window.location.href='../Views/friends.html';
}
function showLocations() {
  console.log("Showing friends...");
}
function showDrinks() {
  window.location.href='../Views/drinks.html';
}
function showHistory() {
  window.location.href='../Views/history.html';
}
function showEntry() {
  console.log("Showing friends...");
}
function showFaQ() {
  console.log("Showing friends...");
}
function showHome() {
  window.location.href='../Views/dashboard.html';
}

const navbarElement = renderNavbar(
  '../Images/image1.png',
  "John's Training",
  [
    { label: 'Home', onclick: showHome },
    { label: 'Friends', onclick: showFriends, active: true },
    { label: 'Locations', onclick: showLocations },
    { label: 'Drinks', onclick: showDrinks },
    { label: 'History', onclick: showHistory },
    { label: 'New Entry', onclick: showEntry },
    { label: 'FaQ', onclick: showFaQ }
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