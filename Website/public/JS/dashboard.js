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

const navbarElement = renderNavbar(
  '../Images/image1.png',
  "John's Training",
  [
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