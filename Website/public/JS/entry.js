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
  setupForm();
});

function setupForm(){
  const form = document.getElementsByTagName('form')[0];
  form.addEventListener('submit', submit);
}

function submit(e){
  e.preventDefault();

  // Improve below access of form
  const form = document.getElementsByTagName('form')[0];
  const formData = new FormData(form);

  const formDataObject = {};

  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });
  
  // Object of data, to be sent in post request
  console.log(formDataObject);
}