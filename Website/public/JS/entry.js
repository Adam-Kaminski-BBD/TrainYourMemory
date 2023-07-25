import * as Fn from './navbar.js';

// const name = "Thabang"; 

// const navbarElement = Fn.renderNavbar(
//   `${name}'s Training`);

// const navbarContainer = document.getElementById('navbarContainer');
// navbarContainer.appendChild(navbarElement);

document.addEventListener('DOMContentLoaded',()=>{
  menuSetup();
  setupForm();
});

function menuSetup(){
  const navbarElement = Fn.renderNavbar();
  const main = document.getElementsByTagName('main')[0];
  const body = document.getElementsByTagName('body')[0];
  body.insertBefore(navbarElement, main);
}

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