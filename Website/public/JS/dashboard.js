import * as Fn from './navbar.js';

const navbarElement = Fn.renderNavbar(
  '../Images/image1.png',
  "John's Training",
  [
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